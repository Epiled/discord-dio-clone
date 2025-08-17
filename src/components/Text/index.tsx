import { TextStyled } from "./styles";

interface IText extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
  children?: React.ReactNode;
  className?: string;
}

export const Text = (props: IText) => {
  const { text, children, className, ...rest } = props;

  return (
    <TextStyled className={className} {...rest}>
      {text || children}
    </TextStyled>
  );
};
