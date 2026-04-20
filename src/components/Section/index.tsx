import { SectionStyled, SectionWrapper } from "./styles";

interface ISection {
  type?: "default" | "clear";
  variation?: "default" | "reverse" | "column";
  className?: string;
  children?: React.ReactElement;
}

export const Section = (props: ISection) => {
  const {
    type = "default",
    variation = "default",
    className,
    children,
    ...rest
  } = props;

  return (
    <SectionStyled type={type} className={className} {...rest}>
      <SectionWrapper type={type} $variation={variation}>
        {children}
      </SectionWrapper>
    </SectionStyled>
  );
};
