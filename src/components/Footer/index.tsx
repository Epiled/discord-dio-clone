import { FooterStyled } from "./styles";

import DiscordIcon from "assets/svg/discord.svg";

export const Footer = () => {
  return (
    <FooterStyled>
      <img src={DiscordIcon} alt="DiscordIcon" />
    </FooterStyled>
  );
};
