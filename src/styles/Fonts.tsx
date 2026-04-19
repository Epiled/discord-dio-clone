import { createGlobalStyle } from "styled-components";

import WhitneyLight from "../assets/fonts/Whitney/Whitney-Light.otf";
import WhitneyLightItalic from "../assets/fonts/Whitney/Whitney-Light-Italic.otf";
import WhitneyBook from "../assets/fonts/Whitney/Whitney-Book.otf";
import WhitneyBookItalic from "../assets/fonts/Whitney/Whitney-Book-Italic.otf";
import WhitneyMedium from "../assets/fonts/Whitney/Whitney-Medium.otf";
import WhitneyMediumItalic from "../assets/fonts/Whitney/Whitney-Medium-Italic.otf";
import WhitneySemiBold from "../assets/fonts/Whitney/Whitney-SemiBold.otf";
import WhitneySemiBoldItalic from "../assets/fonts/Whitney/Whitney-SemiBold-Italic.otf";
import WhitneyBold from "../assets/fonts/Whitney/Whitney-Bold.otf";

import GintoNordBold from "../assets/fonts/Ginto-Nord/Ginto-Nord-Bold.woff2";
import GintoNordBlack from "../assets/fonts/Ginto-Nord/Ginto-Nord-Black.woff2";

const Fonts: React.FC = createGlobalStyle`
  @font-face {
    font-family: 'Whitney';
    font-weight: 300;
    src: url(${WhitneyLight}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 300;
    font-style: italic;
    src: url(${WhitneyLightItalic}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 400;
    src: url(${WhitneyBook}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 400;
    font-style: italic;
    src: url(${WhitneyBookItalic}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 500;
    src: url(${WhitneyMedium}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 500;
    font-style: italic;
    src: url(${WhitneyMediumItalic}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 600;
    src: url(${WhitneySemiBold}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 600;
    font-style: italic;
    src: url(${WhitneySemiBoldItalic}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: 700;
    src: url(${WhitneyBold}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Whitney';
    font-weight: bold;
    src: url(${WhitneyBold}) format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Ginto Nord';
    font-weight: 700;
    src: url(${GintoNordBold}) format('woff2');
    font-display: swap;
  }

  @font-face {
    font-family: 'Ginto Nord';
    font-weight: 800;
    src: url(${GintoNordBlack}) format('woff2');
    font-display: swap;
  }
`;

export default Fonts;
