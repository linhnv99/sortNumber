
const mapNumberCodes = [
  { label: '9', value: 99 },
  { label: '8', value: 98 },
  { label: '7', value: 97 },
  { label: '6', value: 96 },
  { label: '5', value: 95 },
  { label: '4', value: 94 },
  { label: '3', value: 93 },
  { label: '2', value: 92 },
  { label: '1', value: 91 },
  { label: '0', value: 90 },
];

const mapAlphaCodes = [
  { label: 'a', value: 80 },
  { label: 'b', value: 79 },
  { label: 'c', value: 78 },
  { label: 'd', value: 77 },
  { label: 'e', value: 76 },
  { label: 'f', value: 75 },
  { label: 'g', value: 74 },
  { label: 'h', value: 73 },
  { label: 'i', value: 72 },
  { label: 'j', value: 71 },
  { label: 'k', value: 70 },
  { label: 'l', value: 69 },
  { label: 'm', value: 68 },
  { label: 'n', value: 67 },
  { label: 'o', value: 66 },
  { label: 'p', value: 65 },
  { label: 'q', value: 64 },
  { label: 'r', value: 63 },
  { label: 's', value: 62 },
  { label: 't', value: 61 },
  { label: 'u', value: 60 },
  { label: 'v', value: 59 },
  { label: 'w', value: 58 },
  { label: 'x', value: 57 },
  { label: 'y', value: 56 },
  { label: 'z', value: 55 },

  { label: 'A', value: 50 },
  { label: 'B', value: 49 },
  { label: 'C', value: 48 },
  { label: 'D', value: 47 },
  { label: 'E', value: 46 },
  { label: 'F', value: 45 },
  { label: 'G', value: 44 },
  { label: 'H', value: 43 },
  { label: 'I', value: 42 },
  { label: 'J', value: 41 },
  { label: 'K', value: 40 },
  { label: 'L', value: 39 },
  { label: 'M', value: 38 },
  { label: 'N', value: 37 },
  { label: 'O', value: 36 },
  { label: 'P', value: 35 },
  { label: 'Q', value: 34 },
  { label: 'R', value: 33 },
  { label: 'S', value: 32 },
  { label: 'T', value: 31 },
  { label: 'U', value: 30 },
  { label: 'V', value: 29 },
  { label: 'W', value: 28 },
  { label: 'X', value: 27 },
  { label: 'Y', value: 26 },
  { label: 'Z', value: 25 },
]



const getNumberCode = (label) => mapNumberCodes.find(it => it.label === label);

const getAlphaCode = (label) => mapAlphaCodes.find(it => it.label === label);

module.exports = {
  getNumberCode,
  getAlphaCode,
  NUMBER_MAX_VALUE: 99,
  ALPHA_MAX_VALUE: 80,
  DEFAULT_CHAR: 10,
  TOTAL_DEFAULT_CHAR: 20
}