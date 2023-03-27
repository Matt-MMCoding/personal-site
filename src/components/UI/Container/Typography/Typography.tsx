import { forwardRef } from 'react';
import { ITypographyProps } from './types';
import { StyledContainer } from './styles';

const Typography = forwardRef<HTMLElement, ITypographyProps>(
  ({ color, children, ...rest }, ref) => {
    return (
      <StyledContainer
        ref={ref}
        $color={color}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default Typography;

Typography.displayName = 'Typography';
