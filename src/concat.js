const concat = (...args) => {
  const arguments = [...args]

  return arguments.reduce((str, str2) => {
    return str + str2
  }, '')
}

module.exports = concat
