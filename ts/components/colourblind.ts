const cb = document.querySelector('button#colourblind') as HTMLButtonElement | null;
const dropdown = document.querySelector('div#colourblind-dropdown') as HTMLDivElement | null;
if (cb && dropdown) {
  cb.addEventListener('click', (e) => {
    e.preventDefault();

    if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden');
    } else dropdown.classList.add('hidden');
  });
} else console.warn('[colourblind.button] Elements not found');
