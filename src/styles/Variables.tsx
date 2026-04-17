import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {

    --color-brand-primary: #5865f2;

    --color-text-primary: #23272a;
    
    --color-button-inverse-hover: #36393f;
    
    --color-neutral-black: #000000;
    --color-neutral-white: #ffffff;

    --color-shadow: rgba(0, 0, 0, 0.2);
    
    --footer: rgba(35, 39, 42, 1);

    --lighter: #ffffff;
    --darker: #000000;
  }
`;

export default Variables;
