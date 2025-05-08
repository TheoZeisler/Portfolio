import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: `0.25em` },
  show: {
    opacity: 1,
    y: `0em`,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
};

export function SplitText({ text }) {
  const words = text.split(" ");

  return (
    <motion.div
      className="text-lg text-textWhite text-justify"
      style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          style={{ display: "inline-flex", marginRight: "0.25em" }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              style={{ display: "inline-block", whiteSpace: "pre" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.div>
  );
}
