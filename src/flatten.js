const _ = require('lodash')
//declare a results array
//create for loop that goes over mama array
//within that for loop, nest another for loop to iterate over bebes
//push all the items into the results
//return the results array
//
// module.exports = flatten;

const flatten = (array) => {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i]
    if (_.isArray(element)) {
      flattened = flattened.concat(flatten(element))
    }
     else {
      flattened.push(element)
    }
  }
  return flattened;
}

//
// const flatten = (parent) => {
//   let flattened = []
//
//   for (var i = 0; i < parent.length; i++) {
//     let child = parent[i]
//
//     if (!_.isArray(child)) {
//       console.log("NOt array:", child);
//       flattened.push(child)
//
//       console.log(flattened);
//     } else {
//       console.log("IS array:", child);
//       // when element is an array, take each sub-element and append to flattened array
//       for (var i = 0; i < child.length; i++) {
//         let grandchild = child[i]
//         flattened.push(grandchild)
//       }
//       console.log(flattened);
//     }
//   }
//
//   return flattened
// }


module.exports = flatten;
