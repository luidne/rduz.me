import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const AdSense = lazy(() => import("../../components/AdSense"));

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
      
      {/* <AdSense adSlot="1234567890" /> */}
      
      <ContentBlock
        type="right"
        title="Rápido, Seguro e Gratuito"
        content="O reduz.me é um encurtador de URLs moderno que transforma seus links longos em URLs curtas e fáceis de compartilhar. Ideal para redes sociais, campanhas de marketing e mensagens."
        section={[
          {
            title: "Compartilhe com Facilidade",
            content: "URLs curtas são mais fáceis de compartilhar em redes sociais, e-mails e mensagens. Economize caracteres e torne seus links mais profissionais.",
            icon: "notes.svg"
          },
          {
            title: "Sem Cadastro Necessário",
            content: "Use o serviço gratuitamente sem necessidade de criar conta. Cole seu link, clique em reduzir e pronto!",
            icon: "notes.svg"
          }
        ]}
        icon="waving.svg"
        id="about"
      />
      
      {/* <AdSense adSlot="0987654321" /> */}
      
      <ContentBlock
        type="left"
        title="Como Funciona?"
        content="O processo é simples e rápido. Cole seu link longo no campo acima, clique em 'Reduzir URL' e receba instantaneamente uma URL curta e personalizada no formato rduz.me/xxxxx. Copie e compartilhe onde quiser!"
        icon="product-launch.svg"
        id="mission"
      />
      
      <ContentBlock
        type="right"
        title="Por que Usar o reduz.me?"
        content="Além de encurtar seus links, o reduz.me oferece URLs limpas e profissionais, perfeitas para uso em qualquer plataforma. Acompanhe seus links, evite erros de digitação e melhore a aparência das suas comunicações online."
        icon="graphs.svg"
        id="product"
      />
    </Container>
  );
};

export default Home;
