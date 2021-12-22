const sections = document.querySelectorAll('section.page');
sections.forEach((sect, i) => {
  document.body.addEventListener('scroll', () => {
    const scrollValue = Math.fround((sect as HTMLElement).offsetTop - document.body.scrollTop);
    (sect as HTMLElement).style.setProperty('--translate', `${scrollValue / 4}px`);
  });
});
