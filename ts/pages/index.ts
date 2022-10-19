const socials = document.querySelectorAll('div#external-links > a');
if (socials.length > 0) {
  socials.forEach((a) => {
    const title = a.attributes.getNamedItem('data-title')?.textContent;

    if (title) {
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.id = `tooltip-${title.toLowerCase()}`;
      tooltip.textContent = title;

      const addTooltip = () => {
        if (a.querySelector('div.tooltip') !== null) return;

        const rect = a.getBoundingClientRect();
        tooltip.style.top = `${rect.top + rect.height}px`;
        tooltip.style.left = `${rect.left}px`;
        tooltip.style.width = `${rect.width}px`;
        a.appendChild(tooltip);
      };

      const removeTooltip = () => {
        a.removeChild(tooltip);
      };

      a.addEventListener('mouseover', addTooltip);
      a.addEventListener('mouseleave', removeTooltip);
    }
  });
}
