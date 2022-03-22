const BigNumber = require('big-number');
const {
  getAlphaCode,
  getNumberCode,
  NUMBER_MAX_VALUE,
  ALPHA_MAX_VALUE,
  DEFAULT_CHAR,
  TOTAL_DEFAULT_CHAR
} = require('./utils')

/*
  priority: number > alphabet
  default template: (20char) XXXXXXXXXX(number) - XXXXXXXXXX(alphabet)
*/

const getNumberFromCode = (numberCodes, alphaCodes, jpCodes) => {
  const sum = new BigNumber(0);
  if (numberCodes == null && !alphaCodes && !jpCodes) {
    return sum;
  }

  console.log("=====NUMBER=====")
  const numberArr = numberCodes.toString().split('')
  const numberLen = numberArr.length;
  if (numberLen < DEFAULT_CHAR) {
    for (let i = 0, p = TOTAL_DEFAULT_CHAR - 1; i < numberLen && p >= TOTAL_DEFAULT_CHAR - numberLen; i++, p--) {
      const numObj = getNumberCode(numberArr[i])
      if (numObj) {
        console.log(`Pow: ${p} - value: ${numObj.value}`)
        sum.add(BigNumber(numObj.value).multiply(BigNumber(10).pow(p)))
      }
    }
  }

  for (let p = TOTAL_DEFAULT_CHAR - numberLen - 1; p >= DEFAULT_CHAR; p--) {
    console.log(`Pow: ${p} - value: ${NUMBER_MAX_VALUE + 1}`)
    sum.add(BigNumber(NUMBER_MAX_VALUE + 1).multiply(BigNumber(10).pow(p)))
  }

  console.log("====ALPHA====")
  const alphaLen = alphaCodes.length;
  if (alphaLen < DEFAULT_CHAR) {
    for (let i = 0, p = TOTAL_DEFAULT_CHAR - DEFAULT_CHAR - 1; i < alphaLen && p >= 0; i++, p--) {
      const alphaObj = getAlphaCode(alphaCodes[i])
      if (alphaObj) {
        console.log(`Pow: ${p} - value: ${alphaObj.value}`)
        sum.add(BigNumber(alphaObj.value).multiply(BigNumber(10).pow(p)))
      }
    }
  }

  for (let p = TOTAL_DEFAULT_CHAR - DEFAULT_CHAR - alphaLen - 1; p >= 0; p--) {
    console.log(`Pow: ${p} - value: ${ALPHA_MAX_VALUE + 1}`)
    sum.add(BigNumber(ALPHA_MAX_VALUE + 1).multiply(BigNumber(10).pow(p)))
  }
  return sum;
}

/**
1a
1aa

*/

console.log(getNumberFromCode(1, "a") > getNumberFromCode(1, "abc")  )
