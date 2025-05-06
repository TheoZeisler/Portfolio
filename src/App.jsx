import { BrowserRouter } from "react-router";
import { Header } from "./components/header/header";
import { Titre } from "./components/ui/titre";
import { ImageProfil } from "./components/ui/imageProfil";
import { DownloadButton } from "./components/ui/downloadButton";
import { SliderPicto } from "./components/slider/sliderPicto";
import React, { useState } from "react";
import { Cards, icons } from "./components/card/cards";
import ContactForm from "./components/form/contactForm";
import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedText } from "./components/animations/animatedText";
import { SplitText } from "./components/animations/splitText";

const tabs = [
  { id: "experiences", label: "Experiences" },
  { id: "competences", label: "Compétences" },
  { id: "formations", label: "Formations" },
  { id: "apropos", label: "A propos" },
];

const formations = [
  {
    ecole: "Enigma-School Lille",
    diplome:
      "Mastère Expert en Systèmes d’Information - Titre RNCP au niveau 7",
    annee: "2021 - 2023",
  },
  {
    ecole: "Enigma-School Lille",
    diplome:
      "Bachelor Administrateur des Systèmes d’Information - Titre RNCP au niveau 6 ",
    annee: "2018 - 2021",
  },
];

const experiences = [
  {
    entreprise: "A&F Développement Willems",
    duree: "2021 - 2023",
    poste: "Développeur web fullstack alternant",
    mission: "Développement et maintenance de site web",
    tech: "Wordpress, HTML, CSS, Javascript, jQuery, PHP, Symfony, git",
  },
  {
    entreprise: "Z-Automobiles Hailles",
    duree: "Mai - Septembre 2021",
    poste: "Développeur web Stagiaire",
    mission:
      "Refonte et amélioration du site z-automobiles. Travail sur le référencement Google ",
    tech: "Wordpress, HTML, CSS,  jQuery, SEO",
  },
  {
    entreprise: "E-monsite Amiens",
    duree: "Juillet - Aout 2020",
    poste: "Développeur stagiaire",
    mission:
      "Réalisation de connecteurs API. Création de sources de données sur DataStudio. Utilisation du CMS E-monsite : création d'un site ",
    tech: "Javascript, Google Apps Script, CMS E monsite",
  },
];

const content = {
  formations: (
    <section className=" space-y-4">
      {formations.map((formation, i) => (
        <div
          key={i}
          className="bg-lightBg text-textWhite p-4 rounded-xl shadow"
        >
          <p className="text-2xl max-sm:text-lg underline underline-offset-2">
            {formation.ecole}
          </p>
          <p className="text-lg max-sm:text-sm pt-1">{formation.diplome}</p>
          <p className="text-sm max-sm:text-xs pt-3">{formation.annee}</p>
        </div>
      ))}
    </section>
  ),
  experiences: (
    <section className="lg:grid lg:grid-cols-2 gap-4 max-lg:space-y-4">
      {experiences.map((experience, i) => (
        <div
          key={i}
          className="bg-lightBg text-textWhite p-4 rounded-xl shadow flex flex-col justify-between"
        >
          <div>
            <p className="text-2xl max-sm:text-lg underline underline-offset-2">
              {experience.entreprise}
            </p>
            <p className="text-lg max-sm:text-sm">{experience.duree}</p>
            <p className="text-lg max-sm:text-xs">{experience.poste}</p>
            <p className="text-lg max-sm:text-xs">
              <strong>Mission: </strong>
              {experience.mission}
            </p>
          </div>
          <p className="text-sm max-sm:text-xs pt-2">
            <strong>Technologies : </strong>
            {experience.tech}
          </p>
        </div>
      ))}
    </section>
  ),
  competences: (
    <section className="grid grid-cols-5 gap-8 max-lg:grid-cols-4 max-lg:gap-6 max-md:grid-cols-3 max-md:gap-4">
      {icons.map((item, index) => (
        <Cards
          key={index}
          icon={item.icon}
          name={item.name}
          className="p-4 bg-lightBg rounded-xl text-textWhite text-7xl flex justify-center"
        ></Cards>
      ))}
    </section>
  ),
  apropos: (
    <section className="bg-bgCustom text-textWhite px-6 py-12 md:px-16 md:pt-0">
      <div className="max-w-4xl mx-auto">
        <p className="text-base md:text-lg leading-relaxed mb-4">
          Je m’appelle{" "}
          <span className="font-semibold text-white">Théo Zeisler</span>,
          développeur fullstack passionné par la tech et l’univers du web.
          Curieux, rigoureux et toujours prêt à apprendre, j’aime relever des
          défis techniques, collaborer en équipe et créer des expériences
          numériques utiles et intuitives.
        </p>
        <p className="text-base md:text-lg leading-relaxed mb-4">
          En dehors du code, je suis un grand amateur de{" "}
          <span className="font-semibold text-white">poker</span>, joueur d’
          <span className="font-semibold text-white">échecs</span> et passionné
          de <span className="font-semibold text-white">jeux vidéo</span>. Le
          soir, je me détends volontiers devant une bonne série toujours à la
          recherche de nouveaux univers à explorer.
        </p>
        <p className="text-base md:text-lg leading-relaxed">
          Aujourd’hui, je suis{" "}
          <span className="font-semibold text-white">open to work</span> et prêt
          à m’investir dans de nouveaux projets qui allient innovation,
          challenge et esprit d’équipe. N’hésite pas à me contacter si tu veux
          échanger ou collaborer !
        </p>
      </div>
    </section>
  ),
};

function App() {
  const sectionsRef = useRef({});
  return (
    <BrowserRouter>
      <Header sectionsRef={sectionsRef} />
      <section
        key="hero"
        ref={(el) => (sectionsRef.current["profil"] = el)}
        className="container mx-auto lg:grid lg:grid-cols-2 lg:pb-32 px-4 pt-32 lg:pt-52 pb-16"
      >
        <div className="max-lg:text-center max-sm:px-4 flex flex-col max-lg:items-center gap-2 justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-wider lg:text-5xl text-white uppercase relative inline-block mb-10">
              <AnimatedText text="Théo Zeisler" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </h1>
            <SplitText
              className="text-lg text-textWhite text-justify"
              text="Développeur fullstack passionné par les nouvelles technologies. Curieux de nature, j’aime apprendre en continu et relever de nouveaux défis techniques.
En dehors du code, je suis un joueur de poker passionné, amateur d’échecs et de jeux vidéo. J’aime aussi me détendre devant une bonne série. Ces activités m’aident à garder l’esprit affûté, stratégique et créatif, des qualités que j’applique aussi dans mon travail."
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageProfil className="lg:hidden" />
          </motion.div>
          <DownloadButton text="Télecharger mon CV"></DownloadButton>
        </div>
        <div className="max-lg:hidden flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ImageProfil />
          </motion.div>
        </div>
      </section>
      <SliderPicto />
      <section
        key="competences"
        ref={(el) => (sectionsRef.current["competences"] = el)}
        className="container mx-auto px-4 pt-28 max-lg:pt-16"
      >
        <Titre titre="Mon parcours" />
        <ProfilePage />
      </section>
      <section
        key="contact"
        ref={(el) => (sectionsRef.current["contact"] = el)}
        className="container mx-auto px-4 pt-16 pb-12 md:pb-56 md:pt-28 flex flex-col md:flex-row items-start justify-center gap-12 max-w-5xl"
      >
        <div className="md:w-1/2 text-textWhite space-y-4">
          <h3 className="text-3xl font-bold text-white">
            Envie de collaborer ?
          </h3>
          <p className="text-lg">
            Que ce soit pour un projet web, une mission freelance ou juste
            discuter tech, n’hésite pas à me laisser un message ! 👋
          </p>
          <p className="text-sm italic">Je réponds généralement sous 24h.</p>
        </div>
        <ContactForm />
      </section>
    </BrowserRouter>
  );
}

function ProfilePage() {
  const [activeTab, setActiveTab] = useState("experiences");

  return (
    <div className="mt-6">
      {/* Sidebar */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-x-10 md:space-y-0 ">
        {/* Navigation */}
        <div className="md:flex md:flex-col gap-4 grid grid-cols-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-md text-2xl font-medium transition-all max-sm:text-lg
              ${
                activeTab === tab.id
                  ? "border border-lightGreen text-lightGreen"
                  : "bg-lightBg text-lightGreen"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-hidden relative min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {content[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
