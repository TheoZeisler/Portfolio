import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/myzwyajq", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-lightBg rounded-2xl shadow-2xl space-y-6 text-gray-200"
    >
      <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>

      <input
        type="text"
        name="name"
        placeholder="Nom"
        required
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        required
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none h-32"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-lightGreen hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-emerald-400 font-medium text-center">
          Message envoyé avec succès !
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 font-medium text-center">
          Une erreur est survenue. Réessaie.
        </p>
      )}
    </form>
  );
}
