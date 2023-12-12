// 1 - campos em classe
class User {
  name!: string
  age!: number
}

const lucas = new User()

console.log(lucas)

lucas.name = 'Lucas'
// lucas.job = 'Programmer'

console.log(lucas)

// 2 - constructor
class NewUser {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new NewUser('Joao', 23)

console.log(joao)

// const pedro = new NewUser(12, 12)
