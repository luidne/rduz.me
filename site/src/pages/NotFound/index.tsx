import { lazy } from "react";
import ContentBlock from "../../components/ContentBlock";

const Container = lazy(() => import("../../common/Container"));

const NotFound = () => {
  return (
    <Container>
      <ContentBlock
        type="right"
        title="Vish!"
        content="URL não encontrado."
        icon="not_found_solid_III.svg"
        id="intro"
      />
    </Container>
  );
};

export default NotFound;
