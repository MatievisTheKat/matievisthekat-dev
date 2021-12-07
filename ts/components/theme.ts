const theme = (window.localStorage.getItem('theme') || 'light') as Theme;
const colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);
