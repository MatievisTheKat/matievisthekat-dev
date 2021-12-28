const head = document.querySelector('img#head') as HTMLImageElement | null;
const torso = document.querySelector('img#torso') as HTMLImageElement | null;
const legs = document.querySelector('img#legs') as HTMLImageElement | null;
const feet = document.querySelector('img#feet') as HTMLImageElement | null;

if (!head) console.warn('[buildAMatt] img#head not found');
if (!torso) console.warn('[buildAMatt] img#torso not found');
if (!legs) console.warn('[buildAMatt] img#legs not found');
if (!feet) console.warn('[buildAMatt] img#feet not found');

if (head && torso && legs && feet) {
  
}
