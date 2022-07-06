import { motion } from "framer-motion";
import { styled } from "stitches-config";

const StyledWrapper = styled(motion.div, {
  display: "flex",
  justifyContent: "flex-start",
  flexDirection: "column",
  width: "100%",
  maxWidth: "45.625rem",
  margin: "0 auto",
});

const animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: "50%",
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeIn",
      staggerChildren: 0,
    },
  },
};

interface IWrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return (
    <StyledWrapper
      variants={animation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
