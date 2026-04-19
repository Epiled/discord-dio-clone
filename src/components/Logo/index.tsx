import { LogoStyled } from "./styles";

export type LogoVariation = "default" | "reverse";

export interface ILogo {
  variation?: LogoVariation;
}

export const Logo = (props: ILogo) => {
  const { variation = "default" } = props;

  return <LogoStyled $variation={variation} />;
};
