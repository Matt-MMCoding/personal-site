import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';
export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({ $width, $height, $display, $flexDirection }) => css`
    width: ${$width};
    height: ${$height};
    display: ${$display};
    flex-direction: ${$flexDirection};
  `}
`;
