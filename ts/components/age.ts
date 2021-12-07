const age = document.querySelector('span#age') as HTMLSpanElement | null;
if (age) {
  const birthday = new Date(2005, 4, 13);

  setInterval(() => {
    const diff = Date.now() - birthday.getTime();
    const yearInMs = 3.154e10;
    const str = (diff / yearInMs).toLocaleString(undefined, { maximumFractionDigits: 10, minimumFractionDigits: 10 });
    age.innerText = str;
  }, 50);
} else console.warn('[age] span#age element not found');
