import { css } from 'styled-components';

export const fixedTop = css`
  position: fixed;
  left: 0;
  top: ${({ top }) => top + 'px'};
`;