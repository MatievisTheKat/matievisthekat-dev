const tableBody = document.querySelector('tbody#requests') as HTMLElement;
const entries = performance.getEntriesByType('resource');
const requests = entries.map((e) => ({
  url: e.name.split(window.location.host).pop(),
  duration: e.duration,
  size: (e as PerformanceResourceTiming).transferSize,
}));

for (const req of requests) {
  tableBody.innerHTML += `
    <tr class="request">
      <td class="size">${prettybytes(req.size)}</td>
      <td class="url">${req.url}</td>
      <td class="duration">(${req.duration.toFixed(1)}ms)</td>
    </tr>
  `;
}

tableBody.innerHTML += `
  <tr class="total">
    <td class="size">${prettybytes(
      entries.reduce((acc, e) => acc + (e as PerformanceResourceTiming).transferSize, 0)
    )}</td>
    <td class="url">${window.location.pathname}</td>
    <td class="duration">${(entries.reduce((acc, e) => acc + e.duration, 0) / 1000).toFixed(1)}s</td>
  </tr>
`;
