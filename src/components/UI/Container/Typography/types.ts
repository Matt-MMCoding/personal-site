import { MouseEventHandler, PropsWithChildren } from 'react';

interface IBaseTypographyProps {
  as?: React.ElementType;
  color?: string;
}

export interface ITypographyProps
  extends PropsWithChildren<IBaseTypographyProps> {
  onClick?: MouseEventHandler;
}

export interface IStyledTypographyProps {
  $color: string;
}
