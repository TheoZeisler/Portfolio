import { useState, useEffect, useRef } from "react";

export const nav = [
  { label: "Profil", name: "profil" },
  { label: "Compétences", name: "competences" },
  { label: "Contact", name: "contact" },
];

export default function Nav({ sectionsRef, headerRef }) {
  const [activeSection, setActiveSection] = useState("");
  const isManualScroll = useRef(false);
  const observerRef = useRef(null);
  const buttonRefs = useRef({});

  useEffect(() => {
    const createObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      const options = {
        root: null,
        rootMargin: `-${headerRef?.current?.offsetHeight || 0}px 0px 0px 0px`,
        threshold: 0.6,
      };

      observerRef.current = new IntersectionObserver((entries) => {
        if (isManualScroll.current) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = Object.entries(sectionsRef.current).find(
              ([, el]) => el === entry.target
            )?.[0];

            if (sectionId) {
              setActiveSection(sectionId);
              buttonRefs.current[sectionId]?.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
              });
            }
          }
        });
      }, options);

      Object.values(sectionsRef.current).forEach((section) => {
        if (section) observerRef.current.observe(section);
      });
    };

    createObserver();
    return () => observerRef.current?.disconnect();
  }, [sectionsRef, headerRef]);

  const scrollToSection = (name) => {
    const section = sectionsRef.current[name];
    const headerHeight = headerRef?.current?.offsetHeight || 0;

    if (section) {
      isManualScroll.current = true;
      setActiveSection(name);
      buttonRefs.current[name]?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });

      const y =
        section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      setTimeout(() => {
        isManualScroll.current = false;
      }, 400);
    }
  };

  return (
    <div className="flex flex-col items-center w-full p-4">
      <div className="flex overflow-x-auto scroll-smooth w-full p-4 sm:justify-center">
        {nav.map((navItem) => (
          <button
            key={navItem.name}
            ref={(el) => (buttonRefs.current[navItem.name] = el)}
            onClick={() => scrollToSection(navItem.name)}
            className={`text-2xl p-4 transition-all duration-300 ease-in-out ${
              activeSection === navItem.name
                ? "font-bold text-textWhite"
                : "text-textWhite opacity-70 hover:opacity-100"
            }`}
          >
            {navItem.label}
          </button>
        ))}
      </div>
    </div>
  );
}
