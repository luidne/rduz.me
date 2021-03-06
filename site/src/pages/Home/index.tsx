import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="principal"
        title={"Reduza seu URL agora!"}
        icon="developer.svg"
        id="intro"
      />
    </Container>
  );
};

export default Home;
