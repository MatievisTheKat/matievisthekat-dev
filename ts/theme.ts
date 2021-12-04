type Theme = 'light' | 'dark' | 'solarized';
type Colourblind =
  | 'none'
  | 'protanopia'
  | 'tritanopia'
  | 'achromatopsia'
  | 'protanomaly'
  | 'deuteranomaly'
  | 'tritanomaly'
  | 'achromatomaly';

const theme = (window.localStorage.getItem('theme') || 'light') as Theme;
const colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);
