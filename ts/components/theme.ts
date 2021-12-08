const theme = (window.localStorage.getItem('theme') || 'light') as Theme;
const colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);

const tb = document.querySelector('button#colourblind') as HTMLButtonElement | null;
const themeDropdown = document.querySelector('div#colourblind-dropdown') as HTMLDivElement | null;
if (cb && themeDropdown) {
  cb.addEventListener('click', (e) => {
    e.preventDefault();

    if (themeDropdown.classList.contains('hidden')) {
      themeDropdown.classList.remove('hidden');
    } else themeDropdown.classList.add('hidden');
  });
} else console.warn('[colourblind.button] Elements not found');
