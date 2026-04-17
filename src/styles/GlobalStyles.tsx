import Fonts from "./Fonts";
import Variables from "./Variables";
import ResetCSS from "./ResetCSS";

const GlobalStyles: React.FC = () => {
  return (
    <>
      <Fonts />
      <Variables />
      <ResetCSS />
    </>
  );
};

export default GlobalStyles;
