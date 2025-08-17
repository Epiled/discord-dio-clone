import { Button } from "../Button";
import {
  HeaderButtons,
  HeaderContent,
  HeaderStyled,
  HeaderText,
  HeaderTitle,
} from "./styles";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContent>
        <HeaderTitle>{`Imagine um \n lugar...`}</HeaderTitle>
        <HeaderText>
          …onde você possa pertencer a um clube escolar, um grupo de gamers, ou
          uma comunidade artística mundial. Onde você e alguns amigos possam
          passar um tempo juntos. Um lugar que torna fácil conversar todos os
          dias e socializar com mais frequência.
        </HeaderText>
        <HeaderButtons>
          <Button text="Baixar para Windows" />
          <Button appearance="inverse" text="Abra o Discord no seu navegador" />
        </HeaderButtons>
      </HeaderContent>
    </HeaderStyled>
  );
};
