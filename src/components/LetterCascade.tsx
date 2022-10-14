import { motion } from "framer-motion";

const LetterCascade = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const staggerParent = {
    visible: {
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const slideIn = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: "-0.45em", opacity: 0 },
  };

  return (
    <motion.span variants={staggerParent} initial="hidden" animate="visible">
      {text.split("").map((letter) => (
        <motion.span
          variants={slideIn}
          className={`inline-block`}
          dangerouslySetInnerHTML={{ __html: letter === " " ? "&nbsp;" : letter }}
        />
      ))}
    </motion.span>
  );
};

export default LetterCascade;
