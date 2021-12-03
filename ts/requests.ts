interface LoggingRequest {
  url: string;
  duration: number; // in ms
  size: number; // in bytes
}

const requests: LoggingRequest[] = [];

const entries = performance.getEntriesByType('resource');
entries.forEach((e) =>
  requests.push({ url: e.name, duration: e.duration, size: (e as PerformanceResourceTiming).transferSize })
);

console.log(requests);
