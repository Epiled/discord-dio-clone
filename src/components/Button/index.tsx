import { ButtonStyled } from "./styles";

type Appearance = "default" | "inverse";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  appearance?: Appearance;
  className?: string;
}

export const Button = (props: IButton) => {
  const { text, appearance = "default", className, children, ...rest } = props;
  return (
    <ButtonStyled $appearance={appearance} className={className} {...rest}>
      {text ?? children}
    </ButtonStyled>
  );
};
