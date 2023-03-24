import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';
export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({
    $width,
    $height,
    $display,
    $flexDirection,
    $justifyContent,
    $minWidth,
    $maxWidth,
  }) => css`
    width: ${$width};
    min-width: ${$minWidth};
    max-width: ${$maxWidth};
    height: ${$height};
    display: ${$display};
    flex-direction: ${$flexDirection};
    justify-content: ${$justifyContent};
  `}
`;
