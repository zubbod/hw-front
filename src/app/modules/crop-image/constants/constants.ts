import { ControlId, Position } from '../enums/enums';
import { Control } from '../types/types';

export const DEFAULT_CONTROL_RECT_SIZE = '10px';

export const DEFAULT_CONTROL_TRANSITION = '-5px';

export const DEFAULT_SIZES = {
  width: 320,
  height: 240,
};

export const CONTROLS: Control[] = [
  {
    id: ControlId.TopRight,
    width: DEFAULT_CONTROL_RECT_SIZE,
    height: DEFAULT_CONTROL_RECT_SIZE,
    top: DEFAULT_CONTROL_TRANSITION,
    right: DEFAULT_CONTROL_TRANSITION,
    left: Position.Unset,
    bottom: Position.Unset,
  },
  {
    id: ControlId.TopLeft,
    width: DEFAULT_CONTROL_RECT_SIZE,
    height: DEFAULT_CONTROL_RECT_SIZE,
    top: DEFAULT_CONTROL_TRANSITION,
    right: Position.Unset,
    left: DEFAULT_CONTROL_TRANSITION,
    bottom: Position.Unset,
  },
  {
    id: ControlId.BottomLeft,
    width: DEFAULT_CONTROL_RECT_SIZE,
    height: DEFAULT_CONTROL_RECT_SIZE,
    top: Position.Unset,
    right: Position.Unset,
    left: DEFAULT_CONTROL_TRANSITION,
    bottom: DEFAULT_CONTROL_TRANSITION,
  },
  {
    id: ControlId.BottomRight,
    width: DEFAULT_CONTROL_RECT_SIZE,
    height: DEFAULT_CONTROL_RECT_SIZE,
    top: Position.Unset,
    right: DEFAULT_CONTROL_TRANSITION,
    left: Position.Unset,
    bottom: DEFAULT_CONTROL_TRANSITION,
  },
];
