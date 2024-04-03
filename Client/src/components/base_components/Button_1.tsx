import { LucideIcon } from "lucide-react";

interface ButtonProps {
  Title: string;
  Icon: LucideIcon;
  Handler: Function;
}
// Animation
import { motion } from "framer-motion";
export default function Button_1({ Title, Icon, Handler }: ButtonProps) {
  return (
    <>
      <motion.section
        whileTap={{ scale: 0.92 }}
        transition={{
          ease: "easeInOut",
          duration: 0.01,
        }}
        onClick={() => Handler()}
        className="Button"
      >
        <span>
          <Icon size={19} />
        </span>
        <button className=" text-[13px] font-bold">{Title}</button>
      </motion.section>
    </>
  );
}
