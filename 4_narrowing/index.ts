// 1 - type guard

function sum(a: number | string, b: number | string) {
  if (typeof a === 'string' && typeof b === 'string') console.log(parseFloat(a) + parseFloat(b))
  else if (typeof a === 'number' && typeof b === 'number') console.log(a + b)
  else console.log('Impossível realizar a soma!')
}

sum('4', '59')
sum(12, 59)
sum('4', 59)


// 2 - checando se valor existe

function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === 'sum') {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === 'multiply') {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  } else console.log('Por favor, defina uma operação!')
}

operations([1, 2, 3], 'sum')
operations([1, 2, 3], 'multiply')
operations([1, 2, 3])

// instance of

class User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User('Jhon')
const paul = new SuperUser('Paul')

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
  if (user instanceof SuperUser) console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
  else if (user instanceof User) console.log(`Olá ${user.name}`)
}

userGreeting(jhon)
userGreeting(paul)
