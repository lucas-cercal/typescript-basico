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

// 7 - getters
class Person {
  name: string
  surname: string

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + ' ' + this.surname
  }
}

const lucasCercal = new Person('Lucas', 'Cercal')

console.log(lucasCercal.name)

console.log(lucasCercal.fullName)

// 8 - setters
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x === 0) return

    this.x = x

    console.log('X inserido com sucesso')
  }

  set fillY(y: number) {
    if (y === 0) return

    this.y = y

    console.log('Y inserido com sucesso')
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0

console.log(myCoords)

myCoords.fillY = 10

console.log(myCoords.getCoords)

// 9 - implements
interface showTitle {
  itemTitle(): string
}

class blogPost implements showTitle {
  title: string

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título do post é: ${this.title}`
  }
}

const myPost = new blogPost('Hello World')

console.log(myPost.itemTitle())

class TestingInterface implements showTitle {
  title: string

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título é: ${this.title}`
  }
}

const testInterface = new TestingInterface('Hello')

console.log(testInterface.itemTitle())

// 10 - override de métodos
class Base {
  someMethod() {
    console.log('Alguma coisa...')
  }
}

class Nova extends Base {
  someMethod() {
    console.log('Testando outra coisa...')
  }
}

const myObject = new Nova()

myObject.someMethod()

// 11 - public
class C {
  public x = 10
}

class D extends C {

}

const cInstance = new C()

console.log(cInstance.x)

const dInstance = new D()

console.log(dInstance.x)

// 12 - protected
class E {
  protected x = 10

  protected protectedMethod() {
    console.log('Este método é protegido')
  }
}

class F extends E {
  show() {
    console.log('X: ' + this.x)
  }

  showProtectedMethod() {
    this.protectedMethod()
  }
}

const fInstance = new F()

fInstance.show()

fInstance.showProtectedMethod()

// 13 - private
class PrivateClass {
  private name = 'Private'

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log('Método privado')
  }

  showPrivateMethod() {
    this.privateMethod()
  }
}

const pObj = new PrivateClass()

// console.log(pObj.name)

console.log(pObj.showName())

// console.log(pObj.privateMethod())

pObj.showPrivateMethod()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }

// 14 - static members
class StaticMembers {
  static prop = 'Teste static'

  static staticMethod() {
    console.log('Este é um método estático')
  }
}

console.log(StaticMembers.prop)

StaticMembers.staticMethod()

// 15 - generic class
class Item<T, U> {
  first: T
  second: U

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }
}

const newItem = new Item('Caixa', 'Surpresa')

console.log(newItem.showFirst)
console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem.showFirst)
console.log(typeof secondItem.first)
