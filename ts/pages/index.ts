const socials = document.querySelectorAll('div#external-links > a');
if (socials.length > 0) {
  socials.forEach((a) => {
    const title = a.attributes.getNamedItem('data-title')?.textContent;
    const rect = a.getBoundingClientRect();

    // a.querySelector('button')?.addEventListener('mouseover', (_) => a.classList.add('hover'));
    // a.querySelector('button')?.addEventListener('mouseout', (_) => a.classList.remove('hover'));

    if (title) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.id = `tooltip-${title.toLowerCase()}`;
      tooltip.textContent = title;
      tooltip.style.top = `${rect.top - 3}px`; // adjusting for the slight padding the icons have at the bottom
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.height = `${rect.height}px`;
      tooltip.style.width = `${rect.width}px`;

      const addTooltip = () => {
        a.appendChild(tooltip);
      };

      const removeTooltip = () => {
        a.removeChild(tooltip);
      };

      a.addEventListener('mouseover', addTooltip);
      a.addEventListener('mouseout', removeTooltip);
      tooltip.addEventListener('mouseover', addTooltip);
    }
  });
}
