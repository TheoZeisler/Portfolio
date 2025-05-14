import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header/header";
import { Titre } from "./components/ui/titre";
import { ImageProfil } from "./components/ui/imageProfil";
import { DownloadButton } from "./components/ui/downloadButton";
import { AnimatedText } from "./components/animations/animatedText";
import { SplitText } from "./components/animations/splitText";
import { motion } from "framer-motion";
import { SliderPicto } from "./components/slider/sliderPicto";
import { ContactForm } from "./components/form/contactForm";
import ProfilePage from "./components/profilePage/profilePage";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  const sectionsRef = useRef({});
  return (
    <BrowserRouter>
      <Header sectionsRef={sectionsRef} />
      <section
        key="hero"
        ref={(el) => (sectionsRef.current["profil"] = el)}
        className="container mx-auto lg:grid lg:grid-cols-2 lg:pb-32 px-4 pt-32 lg:pt-52 pb-16 gap-16"
      >
        <div className="max-lg:text-center max-sm:px-4 flex flex-col max-lg:items-center gap-2 justify-between">
          <div>
            <p className="text-textWhite italic pb-4">Développeur Fullstack</p>
            <h1 className="text-3xl font-bold tracking-wider lg:text-5xl text-white uppercase relative inline-block mb-10">
              <AnimatedText text="Théo Zeisler" />
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white"></span>
            </h1>
            <SplitText
              text="Développeur spécialisé dans le développement web."
              delay={0}
            />
            <SplitText
              text="Technologies maîtrisées : React, Tailwind, Wordpress, Php..."
              delay={0.5}
            />
            <div className="flex lg:items-center gap-2">
              <SplitText text="Faites défiler pour en savoir plus." delay={1} />
            </div>
          </div>
          <div className="lg:hidden py-12">
            <div className="relative w-[170px] h-[190px] flex items-center justify-center image-container">
              <div className="absolute w-[225px] h-[225px] rounded-full spinning-border" />
              <div className="absolute inset-0 bg-bgCustom/20 rounded-[38%] z-20 pointer-events-none" />
              <ImageProfil className="rounded-[38%] w-full h-full object-cover z-10" />
            </div>
          </div>

          <div className="flex gap-4 mt-4 items-center justify-between max-sm:flex-col">
            <DownloadButton text="Télecharger mon CV"></DownloadButton>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/th%C3%A9o-zeisler/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightGreen hover:text-white text-4xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/TheoZeisler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lightGreen hover:text-white text-4xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-[300px] h-[340px] flex items-center justify-center">
              <div className="absolute w-[402px] h-[402px] rounded-full spinning-border" />
              <div className="absolute inset-0 bg-bgCustom/20 rounded-[38%] z-20 pointer-events-none" />
              <div className="image-loading absolute inset-0 rounded-[38%]" />
              <ImageProfil className="rounded-[38%] w-full h-full object-cover z-10" />
            </div>
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
            Que ce soit pour un projet web ou une mission freelance, n'hésite
            pas à me laisser un message !
          </p>
          <p className="text-sm italic">Je réponds généralement sous 24h.</p>
        </div>
        <ContactForm />
      </section>
    </BrowserRouter>
  );
}

export default App;
