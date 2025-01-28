const mySlice = (arr, start, end) => {
  const res = []
  for (let i = start; i < end; i++) res.push(arr[i])
  return res
}

const myIndexOf = (arr, item, from = 0) => {
  for (let i = from; i < arr.length; i++) if (arr[i] === item) return i
  return -1
}

const myIncludes = (arr, item, from = 0) => {
  for (let i = from; i < arr.length; i++) if (arr[i] === item) return true
  return false
}

const arr = [23, 4, 2, 54, 32, 94]
console.log('MySlice: ', mySlice(arr, 1, 3), arr.slice(1, 3))
console.log('MyIndexOf', myIndexOf(arr, 54), arr.indexOf(54))
console.log('MyIncludes', myIncludes(arr, 2), arr.includes(2))
