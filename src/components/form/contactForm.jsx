import React, { useState, useCallback } from "react";

export const ContactForm = React.memo(function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
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
    } catch (error) {
      setStatus("error");
    }
  }, []);

  const statusMessages = {
    success: (
      <p className="text-emerald-400 font-medium text-center">
        Message envoyé avec succès !
      </p>
    ),
    error: (
      <p className="text-red-500 font-medium text-center">
        Une erreur est survenue. Réessaie.
      </p>
    ),
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-lightBg rounded-2xl shadow-2xl space-y-6 text-white"
    >
      <h2 className="text-3xl font-bold text-center">Contactez-moi</h2>

      <input
        type="text"
        name="name"
        placeholder="Nom"
        required
        disabled={status === "loading"}
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        disabled={status === "loading"}
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none disabled:opacity-50"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        required
        disabled={status === "loading"}
        className="w-full p-4 rounded-lg bg-lightBg text-white placeholder-lightGreen border border-lightGreen focus:ring-2 focus:ring-emerald-500 focus:outline-none h-32 disabled:opacity-50"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-lightGreen hover:bg-emerald-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      {statusMessages[status]}
    </form>
  );
});
