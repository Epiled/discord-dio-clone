import { createGlobalStyle } from "styled-components";

const Variables = createGlobalStyle`
  :root {

    --color-brand-primary: #5865f2;
    
    --color-text-primary: #23272a;
    --color-text-link: #00b0f4;

    --color-surface-active-menu: #f6f6f6;
    
    --color-button-inverse-hover: #36393f;
    --color-button-brand-hover: #7983f5;
    --color-logo-reverse: #23272a;
    --color-icon: #23272a;
    
    --color-neutral-black: #000000;
    --color-neutral-white: #ffffff;

    --color-divisor: #ebedef;
    --color-shadow: rgba(0, 0, 0, 0.2);
    
    --footer: rgba(35, 39, 42, 1);

    --lighter: #ffffff;
    --darker: #000000;
  }
`;

export default Variables;
