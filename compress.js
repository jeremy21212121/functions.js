/*
   Takes an array of integers and compresses it to n values between 0 and max
*/

const compress = (arr, n = 4, max = 256) => {

  if (arr.length < n) {
    // input array is too short, return array of NaN
    return Array.from(Array(n)).map(ud => NaN)
  }
  let outputArr = []
  let mod = arr.length % n
  while (mod > 0) {
    // pop array until it is evenly divisible by n. We could mix them in instead of throwing them away.
    outputArr.pop()
    mod -= 1
  }
  // compression ratio. This many byte values will be reduced to 1 byte value.
  const ratio = arr.length / n
  if (ratio > 1) {
   // compression is required
    for (let i=0; i<n; i++) {
      outputArr.push(arr.slice(i*ratio, (i+1)*ratio))
    }
    outputArr = outputArr.map(intArr => intArr.reduce((a,b)=>(a+b)%max))
  } else {
    // input array has correct length, no reduction required
    // Make sure no values are over max and return
    outputArr.push(...arr.map(val => val % max))
  }

  return outputArr
}

module.exports = compress

