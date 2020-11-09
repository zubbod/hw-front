import { OverlayContent } from './overlay-content.type';

export type OverlayParams<T> = {
  element: HTMLElement;
  content: OverlayContent;
  data?: T;
  width?: number | string;
  height?: number | string;
};
