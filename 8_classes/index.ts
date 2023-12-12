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

class CyborgMan extends KillerMachine {
  name: string
  guns: number
  powers: string[]

  constructor(name: string, guns: number, powers: string[]) {
    super(name, guns)
    this.powers = powers
  }
}

const roboticMan = new CyborgMan('X-Human', 2, ['Force', 'Fire'])

console.log(roboticMan)

// 5 - métodos
class Dwarf {
  name: string

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log('Hey Stranger!')
  }
}

const jimmy = new Dwarf('Jimmy')

console.log(jimmy)

jimmy.greeting()

// 6 - this
class Truck {
  model: string
  hp: number

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck('Volvo', 400)
const scania = new Truck('Scania', 500)

volvo.showDetails()
scania.showDetails()
