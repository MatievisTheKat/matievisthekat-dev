let theme = (window.localStorage.getItem('theme') || 'light') as Theme;
let colourblind = (window.localStorage.getItem('colourblind') || 'none') as Colourblind;

document.querySelector('body')?.classList.add(colourblind, theme);

window.addEventListener('click', (e) => {
  if (
    e.target &&
    !(e.target as HTMLElement).classList.contains('theme-dropdown') &&
    !(e.target as HTMLElement).classList.contains('theme')
  ) {
    const mode = (e.target as HTMLElement).id;
    toggleDropdown(mode as 'colourblind' | 'theme');
  }
});

function toggleDropdown(mode: 'colourblind' | 'theme') {
  const dropdown = document.querySelector(`div#${mode}.theme-dropdown`) as HTMLDivElement | null;
  if (dropdown) {
    if (!dropdown.classList.contains('hide')) {
      hideDropdown(mode);
    } else {
      const items = dropdown.querySelectorAll<HTMLLIElement>('ul > li');
      const checkSelected = () => {
        items.forEach((li) => {
          const data = li.attributes.getNamedItem('data-value');
          if (!data) return console.warn(`[toggleDropdown(${mode}) -> li] 'data-value' not found`);
          if (theme === (data.value as Theme) || colourblind === (data.value as Colourblind)) {
            li.id = 'selected';
          } else li.id = '';
        });
      };
      checkSelected();

      items.forEach((li) => {
        const data = li.attributes.getNamedItem('data-value');
        if (!data) return console.warn(`[toggleDropdown(${mode}) -> li] 'data-value' not found`);
        li.addEventListener('click', () => {
          if (mode === 'theme') {
            setTheme(data.value as Theme);
          } else {
            setColourblind(data.value as Colourblind);
          }

          checkSelected();
        });
      });
      dropdown.classList.remove('hide');
    }
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
      dropdown.classList.remove('will-hide');
      dropdown.classList.add('hide');
      // replaces dropdown with clone to remove all event listeners. not necessary, just because i dont like the idea of unneeded event listeners lying around
      const clone = dropdown.cloneNode(true) as HTMLDivElement;
      dropdown.parentElement?.replaceChild(clone, dropdown);
    }, 500); // this timeout is defined at sass/components/theme.dropdown.scss@28
  } else console.warn(`[hideDropdown(${mode})] div#${mode}-dropdown not found`);
}

function setTheme(newTheme: Theme) {
  document.querySelector('body')?.classList.remove('light', 'dark', 'solarized');

  document.querySelector('body')?.classList.add(newTheme);
  window.localStorage.setItem('theme', newTheme);
  theme = newTheme;
}

function setColourblind(cb: Colourblind) {
  document
    .querySelector('body')
    ?.classList.remove(
      'none',
      'protanopia',
      'dueteranopia',
      'tritanopia',
      'achromatopsia',
      'protanomaly',
      'deuteranomaly',
      'tritanomaly',
      'achromatomaly'
    );

  document.querySelector('body')?.classList.add(cb);
  window.localStorage.setItem('colourblind', cb);
  colourblind = cb;
}
