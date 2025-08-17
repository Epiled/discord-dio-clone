import { LoadImageStyled } from "./styles";

interface ILoadImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export const LoadImage = (props: ILoadImage) => {
  const { className, ...rest } = props;

  return <LoadImageStyled className={className} {...rest} />;
};
