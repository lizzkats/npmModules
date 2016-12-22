const isArray = () => {
  //make a conditional statement to check if object is an array
  if(Array.isArray){
    //if it is an array do x
    return true
  } else {
    //if it is not an array do y
    return false
  }

}

module.exports = isArray;
