import GlobalStyles from "./styles/GlobalStyles";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Title } from "./components/Title";
import { Text } from "./components/Text";
import { Footer } from "./components/Footer";
import { LoadImage } from "./components/LoadImage";
import { ContentBox } from "./components/ContentBox";

import Image_01 from "assets/img/image_01.png";
import Image_02 from "assets/img/image_02.png";
import Image_03 from "assets/img/image_03.png";
import Image_04 from "assets/img/image_04.png";
import { AppContainer, AppSection, AppTitle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <Section>
          <>
            <LoadImage src={Image_01} />
            <ContentBox>
              <>
                <Title text="Crie um espaço controlado por convite onde você se sinta em casa" />
                <Text text="Os servidores Discord são organizados em canais com assuntos para vocês colaborarem, compartilharem ou simplesmente falarem do dia sem entupir um chat geral." />
              </>
            </ContentBox>
          </>
        </Section>
        <Section type="clear">
          <>
            <LoadImage src={Image_02} />
            <ContentBox>
              <>
                <Title text="Aqui é fácil se encontrar" />
                <Text text="Entre no canal de voz quando estiver à toa. Amigos no mesmo servidor podem te ver e entrar imediatamente, sem nem ter que fazer a chamada." />
              </>
            </ContentBox>
          </>
        </Section>
        <Section>
          <>
            <LoadImage src={Image_03} />
            <ContentBox>
              <>
                <Title text="Para poucos e para muitos" />
                <Text text="Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais." />
              </>
            </ContentBox>
          </>
        </Section>
        <AppSection type="clear">
          <>
            <LoadImage src={Image_04} />
            <ContentBox>
              <>
                <AppTitle text={`Tecnologia de conexão \nconfiável`} />
                <Text text="Organize qualquer comunidade com ferramentas de moderação e acesso personalizado a membros. Dê poderes especiais aos membros, monte canais privados e muito mais." />
              </>
            </ContentBox>
          </>
        </AppSection>
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
