import { AnimatePresence, motion } from "framer-motion";

interface GradientBlurProps {
  visible?: boolean;
  width?: string;
  height?: string;
  zIndex?: number;
  backdropBlurLevels?: number[];
  colorOverlay?: string;
}

export const GradientBlur: React.FC<GradientBlurProps> = ({
  visible = true,
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="gradient-blur">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
