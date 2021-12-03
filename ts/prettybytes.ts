const BIBYTE_UNITS = ['B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

function prettybytes(number: number) {
  if (number === 0) return ` 0${BIBYTE_UNITS[0]}`;

  const exponent = Math.min(Math.floor(Math.log(number) / Math.log(1024)), BIBYTE_UNITS.length - 1);

  number /= Math.pow(1024, exponent);

  const numberString = number.toLocaleString();
  const unit = BIBYTE_UNITS[exponent];

  return `${numberString}${unit}`;
}
