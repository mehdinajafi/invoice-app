import Link from "next/link";
import { styled } from "stitches-config";
import ArrowDownIcon from "../../public/images/icon-arrow-down.svg";

const GoBackLink = styled("a", {
  display: "flex",
  alignItems: "center",
  marginBlockEnd: "2rem",
  maxWidth: "min-content",
  whiteSpace: "nowrap",
  textAlign: "start",
  fontFamily: "$spartan",
  fontSize: "$xs",
  cursor: "pointer",
  color: "$ntrl-dkr",
  transition: "color 200ms",

  "&:hover": {
    color: "$ntrl",
  },

  "& svg": {
    transform: "rotate(90deg)",
    marginInlineEnd: "1.5rem",
  },
});

const HomeLink = () => {
  return (
    <Link href="/">
      <GoBackLink>
        <ArrowDownIcon />
        Go back
      </GoBackLink>
    </Link>
  );
};

export default HomeLink;
