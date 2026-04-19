import { ButtonStyled } from "./styles";

export type Appearance = "default" | "inverse" | "brand";
export type Size = "small" | "large";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  appearance?: Appearance;
  size?: Size;
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
