export type OverlayCloseEvent<T> = {
  type: 'backdropClick' | 'close';
  data: T;
};
