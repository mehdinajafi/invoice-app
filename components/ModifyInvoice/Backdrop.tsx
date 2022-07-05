import { motion } from "framer-motion";
import { styled } from "stitches-config";

const StyledBackdrop = styled(motion.div, {
  position: "fixed",
  inset: 0,
  backgroundColor: "hsla(0, 0%, 0%, 0.5)",
  zIndex: "$layerA",
});

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

interface IBackdrop {
  children?: React.ReactNode;
  setFormIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Backdrop: React.FC<IBackdrop> = ({ children, setFormIsOpen }) => {
  return (
    <StyledBackdrop
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={() => setFormIsOpen(false)}
    >
      {children}
    </StyledBackdrop>
  );
};

export default Backdrop;
