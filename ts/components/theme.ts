const theme = (window.localStorage.getItem('theme') || 'light') as Theme;
const colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);

function toggleDropdown(mode: 'colourblind' | 'theme') {
  const dropdown = document.querySelector(`div#${mode}.theme-dropdown`) as HTMLDivElement | null;
  if (dropdown) {
    if (!dropdown.classList.contains('hide')) {
      hideDropdown(mode);
    } else dropdown.classList.remove('hide');
  } else console.warn(`[toggleDropdown(${mode})] div#${mode}-dropdown not found`);

  const otherMode = mode === 'colourblind' ? 'theme' : 'colourblind';
  const otherDropdown = document.querySelector(`div#${otherMode}.theme-dropdown`) as HTMLDivElement | null;
  if (otherDropdown) {
    hideDropdown(otherMode);
  } else console.warn(`[toggleDropdown(${mode})] div#${otherMode}-dropdown not found`);
}

function hideDropdown(mode: 'colourblind' | 'theme') {
  const dropdown = document.querySelector(`div#${mode}.theme-dropdown`) as HTMLDivElement | null;
  if (dropdown) {
    // this timout only hides the dropdown after the animation is done
    dropdown.classList.add('will-hide');
    setTimeout(() => {
      dropdown.classList.add('hide');
      dropdown.classList.remove('will-hide');
    }, 600); // this 600ms is defined at sass/components/theme.dropdown.scss@28
  } else console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown not found`);
}
