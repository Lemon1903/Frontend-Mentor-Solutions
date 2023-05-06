import { motion } from "framer-motion";

interface IEmptyProps {
  message: string;
  multiplier: number;
}

export default function Empty({ message, multiplier }: IEmptyProps) {
  const itemHeight = innerWidth < 1024 ? 48.8 : 74.8;
  const msgHeight = Math.max(itemHeight, itemHeight * multiplier);

  return (
    <motion.div
      className="grid h-24 place-items-center border-b border-muted text-base lg:text-xl"
      initial={{ height: `${msgHeight}px`, opacity: 0 }}
      animate={{ height: "100px", opacity: 1 }}
    >
      {message}
    </motion.div>
  );
}
