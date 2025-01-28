// 1
const makeFirstSymbolUp = (text) => {
  return text.charAt(0).toUpperCase() + str.slice(1)
}

// 2
const cutString = (text, size) => {
  if (text.length <= size) return text
  const arr = text.split(' ')
  let res = ''
  let currentSymbols = 0
  for (let i = 0; i < arr.length; i++) {
    if (currentSymbols + arr[i].length < size) {
      res += arr[i]
      currentSymbols += arr[i].length + ' '
    } else {
      i = arr.length
    }
  }
  return res + '...'
}

// 3
const checkSubstring = (first, second) => {
  if (first.includes(second) || second.includes(first)) return true
  return false
}

const str = 'hello world!'
const str2 = 'ello'
console.log(makeFirstSymbolUp(str))
console.log(cutString(str, 11))
console.log(checkSubstring(str, str2))
