export const hex2rgba = (hex: { match: (arg0: RegExp) => { (): any; new(): any; map: { (arg0: (x: any) => number): [any, any, any]; new(): any; }; }; }, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x: string) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };
  
  export const navDelay = 1000;
  export const loaderDelay = 2000;
  
  export const KEY_CODES = {
    ARROW_LEFT: 'ArrowLeft',
    ARROW_LEFT_IE11: 'Left',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_RIGHT_IE11: 'Right',
    ARROW_UP: 'ArrowUp',
    ARROW_UP_IE11: 'Up',
    ARROW_DOWN: 'ArrowDown',
    ARROW_DOWN_IE11: 'Down',
    ESCAPE: 'Escape',
    ESCAPE_IE11: 'Esc',
    TAB: 'Tab',
    SPACE: ' ',
    SPACE_IE11: 'Spacebar',
    ENTER: 'Enter',
  };
  