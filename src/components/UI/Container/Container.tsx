import { forwardRef, memo } from 'react';
import { StyledContainer } from './styles';
import { IContainerProps } from './types';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      width,
      height,
      display = 'flex',
      flexDirection = 'row',
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $width={width}
        $height={height}
        $display={display}
        $flexDirection={flexDirection}
        ref={ref}
        as={as}
        {...rest}
      >
        {children}
      </StyledContainer>
    );
  }
);

export default memo(Container);

Container.displayName = 'Container';
