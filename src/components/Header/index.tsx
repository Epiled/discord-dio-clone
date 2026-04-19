import { Button } from "../Button";
import { DownloadIcon } from "../Icons/DownloadIcon";

import {
  HeaderBackground1,
  HeaderBackground2,
  HeaderBackground3,
  HeaderButtons,
  HeaderContent,
  HeaderImages,
  HeaderStyled,
  HeaderText,
  HeaderTitle,
  HeaderWrapper,
} from "./styles";

import Background1 from "assets/svg/icons-art/background-1.svg";
import Background2 from "assets/svg/icons-art/background-2.svg";
import Background3 from "assets/svg/icons-art/background-3.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderWrapper>
        <HeaderContent>
          <HeaderTitle>{`Imagine um lugar...`}</HeaderTitle>
          <HeaderText>
            …onde você possa pertencer a um clube escolar, um grupo de gamers,
            ou uma comunidade artística mundial. Onde você e alguns amigos
            possam passar um tempo juntos. Um lugar que torna fácil conversar
            todos os dias e socializar com mais frequência.
          </HeaderText>
          <HeaderButtons>
            <Button
              icon={<DownloadIcon aria-hidden="true" />}
              text="Baixar para Windows"
            />
            <Button
              appearance="inverse"
              text="Abra o Discord no seu navegador"
            />
          </HeaderButtons>
        </HeaderContent>
      </HeaderWrapper>
      <HeaderImages>
        <HeaderBackground3 src={Background3} />
        <HeaderBackground2 src={Background2} />
        <HeaderBackground1 src={Background1} />
      </HeaderImages>
    </HeaderStyled>
  );
};
