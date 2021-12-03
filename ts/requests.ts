const tableBody = document.querySelector('tbody#requests') as HTMLDivElement;
const entries = performance.getEntriesByType('resource');
const requests = entries.map((e) => ({
  url: e.name.split(window.location.host).pop(),
  duration: e.duration,
  size: (e as PerformanceResourceTiming).transferSize,
}));

for (const req of requests) {
  tableBody.innerHTML += `
    <tr class="request">
      <td class="size">${req.size.toFixed(0)}B</td>
      <td class="url">${req.url}</td>
      <td class="duration">(${req.duration.toFixed(1)}ms)</td>
    </tr>
  `;
}
