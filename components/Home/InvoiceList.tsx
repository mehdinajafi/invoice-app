import { motion } from "framer-motion";
import React from "react";
import { styled } from "stitches-config";

const List = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const animation = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  hidden: {},
};

interface IInvoicesList {
  children?: React.ReactNode;
}

const InvoicesList: React.FC<IInvoicesList> = ({ children }) => {
  return (
    <List variants={animation} initial="hidden" animate="visible">
      {children}
    </List>
  );
};

export default InvoicesList;
