import { IStyledTypographyProps } from './types';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.p<IStyledTypographyProps>`
  ${({ $color }) => css`
    color: ${$color};
  `}
`;
