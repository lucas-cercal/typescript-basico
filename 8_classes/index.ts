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

// 3 - campo readonly
class Car {
  name: string
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca')

console.log(fusca)

console.log(fusca.wheels)

fusca.name = 'Fusca Turbo'

// fusca.wheels = 5

// 4 - herança e super
class Machine {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine {
  guns: number

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('Destroyer', 4)

console.log(destroyer)

console.log(trator)

class CyborgMan extends KillerMachine{
  name: string
  guns: number
  powers: string[]

  constructor(name: string, guns: number, powers: string[]){
    super(name, guns)
    this.powers = powers
  }
}

const roboticMan = new CyborgMan('X-Human', 2, ['Force', 'Fire'])

console.log(roboticMan)
