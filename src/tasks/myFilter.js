function myFilter(array, callback) {
  let res = []
  for (let i of array) if (callback(i)) res.push(i)
  return res
}

const numbers = [1, 2, 3, 4, 5, 3]
console.log(myFilter(numbers, (num) => num > 3))
