const getSummOfNumsInObject = (obj) => {
  let sum = 0
  for (let key in obj)
    if (!Number.isNaN(obj[key]) && typeof obj[key] === 'number') sum += obj[key]
  return sum
}

const getNumberFieldsInObject = (obj) => {
  const res = []
  for (let key in obj) if (typeof obj[key] === 'number') res.push(key)
  return res.sort((a, b) => obj[b] - obj[a])
}

const obj = {
  name: 'Vasya',
  friends: 5,
  likes: 19,
  projects: 7,
  nan: NaN,
  a: 3,
  b: 4,
}
console.log(getSummOfNumsInObject(obj))
console.log(getNumberFieldsInObject(obj))
