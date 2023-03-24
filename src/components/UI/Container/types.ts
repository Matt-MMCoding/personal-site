import {
  ElementType,
  PropsWithChildren,
  MouseEventHandler,
  FocusEventHandler,
} from 'react';
import { CSSProperties } from 'styled-components';
import { StyledTransientProps } from '@/types';

type ContainerCssProps = Pick<
  CSSProperties,
  'width' | 'height' | 'display' | 'flexDirection'
>;

type ContainerSpacingRelatedProps = {
  columnGap?: number;
  rowGap?: number;
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  position?: 'static' | 'fixed' | 'relative' | 'absolute' | 'sticky';
  margin?: number | 'auto';
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
};

interface IContainerStyleProps
  extends ContainerCssProps,
    ContainerSpacingRelatedProps {}

interface IBaseContainerProps extends IContainerStyleProps {}

export interface IContainerProps
  extends PropsWithChildren<IBaseContainerProps> {
  as?: ElementType;
  onClick?: MouseEventHandler;
  onBlur?: FocusEventHandler;
}
export interface IStyledContainerProps
  extends StyledTransientProps<IContainerStyleProps> {}
