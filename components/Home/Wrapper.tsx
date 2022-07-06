import { motion } from "framer-motion";
import { styled } from "stitches-config";

const StyledWrapper = styled(motion.div, {
  width: "100%",
  maxWidth: "45.625rem",
  margin: "0 auto",
});

const animation = {
  exit: {
    x: "-50%",
    opacity: 0,
    transition: {
      type: "tween",
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

interface IWrapper {
  children?: React.ReactNode;
}

const Wrapper: React.FC<IWrapper> = ({ children }) => {
  return (
    <StyledWrapper variants={animation} exit="exit">
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
