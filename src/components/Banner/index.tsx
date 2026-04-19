import { Button } from "../Button";
import { DownloadIcon } from "../Icons/DownloadIcon";

import {
  BannerBackground1,
  BannerBackground2,
  BannerBackground3,
  BannerButtons,
  BannerContent,
  BannerImages,
  BannerStyled,
  BannerText,
  BannerTitle,
  BannerWrapper,
} from "./styles";

import Background1 from "assets/svg/icons-art/background-1.svg";
import Background2 from "assets/svg/icons-art/background-2.svg";
import Background3 from "assets/svg/icons-art/background-3.svg";

export const Banner = () => {
  return (
    <BannerStyled>
      <BannerWrapper>
        <BannerContent>
          <BannerTitle>{`Imagine um lugar...`}</BannerTitle>
          <BannerText>
            …onde você possa pertencer a um clube escolar, um grupo de gamers,
            ou uma comunidade artística mundial. Onde você e alguns amigos
            possam passar um tempo juntos. Um lugar que torna fácil conversar
            todos os dias e socializar com mais frequência.
          </BannerText>
          <BannerButtons>
            <Button
              icon={<DownloadIcon aria-hidden="true" />}
              text="Baixar para Windows"
            />
            <Button
              appearance="inverse"
              text="Abra o Discord no seu navegador"
            />
          </BannerButtons>
        </BannerContent>
      </BannerWrapper>
      <BannerImages>
        <BannerBackground3 src={Background3} />
        <BannerBackground2 src={Background2} />
        <BannerBackground1 src={Background1} />
      </BannerImages>
    </BannerStyled>
  );
};
