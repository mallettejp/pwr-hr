export const breakpoint = (condition) => (dimension) => (unit) =>
  `@media screen and (${condition}-${dimension}: ${unit}px)`;
export const breakpointMax = breakpoint('max');
export const breakpointMin = breakpoint('min');
export const bpMaxWidth = breakpointMax('width');
export const bpMaxHeight = breakpointMax('height');
export const breakSm = bpMaxWidth(340);
export const breakLg = bpMaxWidth(960);
