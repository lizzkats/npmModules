
//iterate over all arguments except the first one
const concat = function () {
//loop over the arguments and pull out every element of each array and append each value to the end of the original array
//return a modified version of the original array
  let originalArray = arguments[0]
  for (let i = 0; i < arguments.length - 1; i++) {
    let currentArgument = arguments[i+1]
    for (let j = 0; j < currentArgument.length; j++) {
      originalArray.push(currentArgument[j])
    }
  }
  return originalArray
}




module.exports = concat;
