let right = 1
let left = 100
const num = Math.round(Math.random() * 99 + 1)
let curNum = Math.round((right + left) / 2)
let check = false
console.log(`Компьютер 1 загадал число ${num}`)

while (!check) {
  console.log(`Компьютер 2: Пробую число ${curNum}`)
  if (curNum === num) {
    console.log('Компьютер 1: Угадал!')
    check = true
  } else if (curNum > num) {
    console.log('Компьютер 1: Меньше!')
    left = curNum
    curNum = Math.round((right + left) / 2)
  } else {
    console.log('Компьютер 1: Больше!')
    right = curNum
    curNum = Math.round((right + left) / 2)
  }
}
