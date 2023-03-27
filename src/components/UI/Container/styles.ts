import styled, { css } from 'styled-components';
import { IStyledContainerProps } from './types';
export const StyledContainer = styled.div<IStyledContainerProps>`
  ${({
    $width,
    $height,
    $display,
    $flexDirection,
    $justifyContent,
    $alignItems,
    $minWidth,
    $maxWidth,
    $color,
    $marginTop,
    $rowGap,
    $columnGap,
  }) => css`
    width: ${$width};
    min-width: ${$minWidth};
    max-width: ${$maxWidth};
    height: ${$height};
    display: ${$display};
    flex-direction: ${$flexDirection};
    justify-content: ${$justifyContent};
    align-items: ${$alignItems}
    color: ${$color};
    margin-top: ${$marginTop};
    row-gap: ${$rowGap};
    column-gap: ${$columnGap};
    // overflow: hidden;
  `}
`;
