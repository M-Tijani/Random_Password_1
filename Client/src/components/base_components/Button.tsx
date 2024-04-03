import { LucideIcon } from "lucide-react";

interface ButtonProps {
  Title: string;
  Icon: LucideIcon;
  Handler: Function;
}
// Animation
import { motion } from "framer-motion";
export default function Button({ Title, Icon, Handler }: ButtonProps) {
  const HandleSpin = { spin: { scale: 1.1, rotate: -180 } };
  return (
    <>
      <motion.section
        whileTap="spin"
        onClick={() => Handler()}
        className="Button"
      >
        <motion.span variants={HandleSpin}>
          <Icon size={19} />
        </motion.span>
        <button className="text-[13px] font-bold">{Title}</button>
      </motion.section>
    </>
  );
}
