import { forwardRef, memo } from 'react';
import { StyledContainer } from './styles';
import { IContainerProps } from './types';

const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      width,
      minWidth,
      maxWidth,
      height,
      display = 'flex',
      flexDirection = 'row',
      justifyContent,
      as,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledContainer
        $width={width}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        $height={height}
        $display={display}
        $flexDirection={flexDirection}
        $justifyContent={justifyContent}
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
