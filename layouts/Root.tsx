import { Sidebar } from "../components/Sidebar";
import { styled } from "stitches-config";

const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "80px 1fr",
  height: "100vh",
  overflow: "hidden",

  "@lg": {
    gridTemplateColumns: "103px 1fr",
    gridTemplateRows: "1fr",
  },
});

const Main = styled("main", {
  padding: "2rem 1.5rem",
  overflow: "auto",

  "@lg": {
    padding: "4.5rem 0",
  },
});

interface IRootLayout {
  children: React.ReactNode;
}

const RootLayout: React.FC<IRootLayout> = (props) => {
  return (
    <Wrapper>
      <Sidebar />
      <Main>{props.children}</Main>
    </Wrapper>
  );
};

export default RootLayout;
