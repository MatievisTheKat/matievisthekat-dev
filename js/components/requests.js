"use strict";
const tbody = document.querySelector('tbody#requests');
if (tbody) {
    let entries = performance.getEntriesByType('resource');
    const setTotals = (entries) => {
        const size = prettybytes(entries.reduce((acc, e) => acc + e.transferSize, 0));
        const url = window.location.pathname;
        const duration = (entries.reduce((acc, e) => acc + e.duration, 0) / 1000).toFixed(1);
        const total = tbody.querySelector('tr#total');
        if (total)
            total.remove();
        tbody.innerHTML += `
    <tr id="total">
      <td class="size">${size}</td>
      <td class="url">${url}</td>
      <td class="duration">${duration}s</td>
    </tr>
  `;
    };
    const addRequest = (req, fade = false) => {
        tbody.innerHTML += `
    <tr class="request ${fade ? 'animate__animated animate__fadeInDown' : ''}">
      <td class="size">${req.size === 0 ? '(cached)' : prettybytes(req.size)}</td>
      <td class="url">${req.url}</td>
      <td class="duration">(${req.duration.toFixed(1)}ms)</td>
    </tr>
  `;
    };
    for (const req of entries.map((e) => ({
        url: e.name.split(window.location.host).pop(),
        duration: e.duration,
        size: e.transferSize,
    })))
        addRequest(req);
    setTotals(entries);
    setInterval(() => {
        const requests = tbody.querySelectorAll('tr.request');
        if (requests)
            requests.forEach((r) => r.classList.remove('animate__animated', 'animate__fadeInDown'));
        const allEntries = performance.getEntriesByType('resource');
        const newEntries = allEntries.slice(entries.length, allEntries.length);
        const newRequests = newEntries.map((e) => ({
            url: e.name.split(window.location.host).pop(),
            duration: e.duration,
            size: e.transferSize,
        }));
        for (const req of newRequests) {
            addRequest(req, true);
        }
        entries = [...entries, ...newEntries];
        setTotals(entries);
    }, 1000);
}
else
    console.warn('[requests] tbody#requests element not found');
//# sourceMappingURL=requests.js.map