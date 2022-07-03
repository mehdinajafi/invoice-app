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

const Main = styled("main", {
  width: "100%",
  maxWidth: "45.625rem",
  margin: "0 auto",
  padding: "2rem 1.5rem",

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
