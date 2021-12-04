const el = document.querySelector('#age');
if (el) {
  const birthday = new Date(2005, 4, 13);

  setInterval(() => {
    const diff = Date.now() - birthday.getTime();
  }, 1);
} else console.warn('[age] #age element not found');
