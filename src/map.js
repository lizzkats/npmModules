const map = function (value) {
  let array = [];
  for (let i = 0; i < value.length; i++) {
    array.push(value[i] * 2)

    }

    return array;
  }

module.exports = map;
// console.log(map);
