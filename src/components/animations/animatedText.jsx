import { motion } from "framer-motion";

export function AnimatedText({ text, delay = 0 }) {
  const words = text.split(" ");

  return (
    <span className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-3"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: delay + i * 0.05, duration: 0.5 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
