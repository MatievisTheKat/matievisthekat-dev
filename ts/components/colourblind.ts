const cb = document.querySelector('button#colourblind') as HTMLButtonElement | null;
const colourDropdown = document.querySelector('div#colourblind-dropdown') as HTMLDivElement | null;
if (cb && colourDropdown) {
  cb.addEventListener('click', (e) => {
    e.preventDefault();

    if (colourDropdown.classList.contains('hidden')) {
      colourDropdown.classList.remove('hidden');
    } else colourDropdown.classList.add('hidden');
  });
} else console.warn('[colourblind.button] Elements not found');
