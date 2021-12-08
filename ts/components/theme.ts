const theme = (window.localStorage.getItem('theme') || 'light') as Theme;
const colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);

function toggleDropdown(mode: 'colourblind' | 'theme') {
  const dropdown = document.querySelector(`div#${mode}.theme-dropdown`) as HTMLDivElement | null;
  if (dropdown) {
    dropdown.classList.toggle('hide');
  } else console.warn(`[toggleDropdown(${mode})] div#${mode}-dropdown not found`);

  const otherMode = mode === 'colourblind' ? 'theme' : 'colourblind';
  const otherDropdown = document.querySelector(`div#${otherMode}.theme-dropdown`) as HTMLDivElement | null;
  if (otherDropdown) {
    otherDropdown.classList.add('hide');
  } else console.warn(`[toggleDropdown(${mode})] div#${otherMode}-dropdown not found`);
}
