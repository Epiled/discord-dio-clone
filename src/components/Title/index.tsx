import { TitleStyled } from "./styles";

type Level = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ITitle extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: Level;
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Title = (props: ITitle) => {
  const { level = "h2", text, children, className, ...rest } = props;

  return (
    <TitleStyled as={level} className={className} {...rest}>
      {text || children}
    </TitleStyled>
  );
};
