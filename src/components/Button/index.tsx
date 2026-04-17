import { ButtonStyled } from "./styles";

type Appearance = "default" | "inverse";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  appearance?: Appearance;
  size?: "small" | "large";
  className?: string;
}

export const Button = (props: IButton) => {
  const {
    text,
    appearance = "default",
    size = "large",
    className,
    children,
    ...rest
  } = props;
  return (
    <ButtonStyled
      $appearance={appearance}
      $size={size}
      className={className}
      {...rest}
    >
      {text ?? children}
    </ButtonStyled>
  );
};
