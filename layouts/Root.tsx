import { Sidebar } from "../components/Sidebar";
import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "80px 1fr",
  height: "100vh",

  "@lg": {
    gridTemplateColumns: "103px 1fr",
    gridTemplateRows: "1fr",
  },
});

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  return (
    <Wrapper>
      <Sidebar />
      <main>{props.children}</main>
    </Wrapper>
  );
};

export default RootLayout;
