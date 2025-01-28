function summAllNumbers(numbers) {
  let sum = 0
  numbers.forEach((number) => {
    sum += number
  })
  return sum
}

let numbers = [10000, 20000, 30000]
console.log(summAllNumbers(numbers))

// Сокращённый код
// function summAllNumbers(numbers) {
//   return numbers.reduce((num, sum) => (sum += num))
// }
// console.log(summAllNumbers(numbers))
