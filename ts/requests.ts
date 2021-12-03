const entries = performance.getEntriesByType('resource');
const requests = entries.map((e) => ({
  url: e.name,
  duration: e.duration,
  size: (e as PerformanceResourceTiming).transferSize,
}));

console.log(requests);
