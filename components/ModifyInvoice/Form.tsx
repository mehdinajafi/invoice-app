import React from "react";
import { motion } from "framer-motion";
import { Form as FormikForm } from "formik";
import { styled } from "stitches-config";

const Wrapper = styled(motion.div, {
  position: "fixed",
  top: "80px",
  left: 0,
  zIndex: "$layerB",
  backgroundColor: "hsl(0, 0%, 100%)",

  "@sm": {
    borderRadius: "0 20px 20px 0",
  },
  "@lg": {
    top: 0,
    paddingInlineStart: "6.4375rem",
  },
});

const StyledForm = styled(FormikForm, {
  padding: "2rem 1rem 0px 1rem",
  width: "100vw",
  height: "calc(100vh - 5rem)",
  maxWidth: "40rem",
  display: "grid",
  gridTemplateRows: "min-content 1fr min-content",

  "@sm": {
    padding: "2.5rem 2rem 0px 2.5rem",
  },
  "@md": {
    padding: "3.5rem 2rem 0px 3.5rem",
  },
  "@lg": {
    borderRadius: "0px 20px 20px 0px",
    height: "100vh",
  },
});

const animationVariants = {
  hidden: {
    x: "-100%",
    transition: { type: "spring", duration: 0.75, ease: "easeIn" },
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      duration: 0.75,
      ease: "easeOut",
      damping: 18,
    },
  },
};

interface IForm {
  children?: React.ReactNode;
}

const Form: React.FC<IForm> = ({ children }) => {
  return (
    <Wrapper
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <StyledForm>{children}</StyledForm>
    </Wrapper>
  );
};

export default Form;
