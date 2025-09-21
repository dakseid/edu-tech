import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easeIn, easeOut } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.4, ease: easeIn } },
};

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
