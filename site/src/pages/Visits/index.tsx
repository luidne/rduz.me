import { lazy } from "react";
import VisitsBlock from "../../components/VisitsBlock";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {

  return (
    <Container>
      <ScrollToTop />
      <VisitsBlock
        title={`Seu link tem...`}
      />
    </Container>
  );
};

export default Home;
