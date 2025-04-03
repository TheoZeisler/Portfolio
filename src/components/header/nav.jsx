import { useRef } from "react";

export default function Slider() {
  const sectionsRef = useRef([]);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <div className="flex flex-col items-center w-ful p-4">
      <div className="flex overflow-x-auto scroll-smooth w-full p-4 sm:justify-center">
        {["Profil", "Compétences", "Projets", "Contact"].map((label, index) => (
          <button
            className="font-RobotoMono text-textWhite text-2xl p-4"
            key={index}
            onClick={() => scrollToSection(index)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
