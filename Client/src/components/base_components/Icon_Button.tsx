// Animation
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  Icon: LucideIcon;
  Handler: Function;
}
export default function Icon_Button({ Icon, Handler }: ButtonProps) {
  return (
    <>
      <motion.div
        onClick={() => Handler()}
        whileTap={{ scale: 1.2 }}
        className="Button_Icon"
      >
        <Icon className="text-white" size={20} />
      </motion.div>
    </>
  );
}
