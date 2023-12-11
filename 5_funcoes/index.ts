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
