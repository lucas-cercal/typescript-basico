// 1 - void
function withoutReturn(): void {
  console.log('Esta função não tem retorno!')
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function isValidName(name: string): boolean {
  return name.length >= 3
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a função!')

  if (isValidName(userName)) {
    console.log('Nome válido. Realizando a saudação...')
    const greet = f(userName)
    console.log('Saudação realizada com sucesso!')
    console.log(greet)
  } else {
    console.log('Nome inválido para saudação.')
  }
}

preGreeting(greeting, 'Lucas')
preGreeting(greeting, 'Oi')

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(['a', 'b', 'c']))
// console.log(firstElement('Teste'))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({ name: 'Lucas' }, { age: 24, job: 'Programmer' })

console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("15", "2"))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ['Teste', 'Testando']))

// 6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) return `Olá ${greet} ${name}, tudo bem?`
  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting('Lucas'))
console.log(modernGreeting('Lucas', 'Sr'))

// 7 - parâmetro default
function somaDefault(n: number, m = 10): number {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 15))

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === 'number') {
    console.log('X é um número')
  }
}

doSomething([1, 2, 3])
doSomething(5)

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage('Algum erro.')

// 10 - rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 348, 2348))
// console.log(sumAll('teste'))