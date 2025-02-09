// part 1
const createLogger = (arr) => {
  let data = arr ?? []

  const log = (message) => {
    data.push(message)
  }

  const getLogs = () => {
    data.forEach((el) => console.log(el))
  }

  return { log, getLogs }
}

const defaultMessages = ['123', '456']

const { log, getLogs } = createLogger(defaultMessages)
log('7890')
getLogs()

// part 2

const createRandomGenerator = (min, max) => {
  const generate = () => {
    return Math.floor(Math.random() * (max - min)) + min
  }
  return generate
}

const f = createRandomGenerator(10, 15)
console.log(f())
