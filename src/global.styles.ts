import { css } from '@linaria/core';

export const globals = css`
  :global() {
    @import '@nikitababko/reset-css';

    @font-face {
      font-family: 'OpenSansRegular';
      src: url('./assets/fonts/OpenSans-Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
      font-style: normal;
    }

    @font-face {
      font-family: 'OpenSansBold';
      src: url('./assets/fonts/OpenSans-Bold.woff2') format('woff2');
      font-weight: 700;
      font-display: swap;
      font-style: normal;
    }

    *,
    html,
    body,
    *:before,
    *:after {
      font-family: 'OpenSansRegular', 'Arial', 'Helvetica', 'Verdana', sans-serif;
    }
  }
`;
