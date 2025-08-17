import { SectionStyled } from "./styles";

interface ISection {
  type?: "default" | "clear";
  className?: string;
  children?: React.ReactElement;
}

export const Section = (props: ISection) => {
  const { type = "default", className, children, ...rest } = props;

  return (
    <SectionStyled type={type} className={className} {...rest}>
      {children}
    </SectionStyled>
  );
};
