const sections = document.querySelectorAll('section.page');
sections.forEach((sect, i) => {
  document.body.addEventListener('scroll', () => {
    const scrollValue = Math.fround((sect as HTMLElement).offsetTop - document.body.scrollTop);
    const style = (sect as HTMLElement).style;
    style.setProperty('--translate', `${scrollValue / 4}px`);
    style.setProperty('--rotate', `${-scrollValue / 15}deg`);
  });
});
