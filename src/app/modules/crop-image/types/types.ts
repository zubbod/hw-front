import { ControlId, Position } from '../enums/enums';

export type ElementPosition = string | Position;

export type Styles = {
  top?: number;
  left?: number;
  width: number;
  height: number;
};

export type Control = {
  id: ControlId;
  width: string;
  height: string;
  top: ElementPosition;
  left: ElementPosition;
  bottom: ElementPosition;
  right: ElementPosition;
};
