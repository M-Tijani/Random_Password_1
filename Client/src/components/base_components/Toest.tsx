import { motion } from "framer-motion";

interface ToestProps {
  Title: string;
}
export default function Toest({ Title }: ToestProps) {
  return (
    <>
      <motion.section
        animate={{ x: [60, 90] }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: [0.5, 0.71, 1, 1.5],
        }}
        exit={{ opacity: 0 }}
        className="Toast"
      >
        {Title}
      </motion.section>
    </>
  );
}
