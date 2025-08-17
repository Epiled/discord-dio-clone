import { ContentBoxStyled } from "./styles";

interface IContentBox {
  className?: string;
  children?: React.ReactElement;
}

export const ContentBox = (props: IContentBox) => {
  const { className, children, ...rest } = props;

  return (
    <ContentBoxStyled className={className} {...rest}>
      {children}
    </ContentBoxStyled>
  );
};
