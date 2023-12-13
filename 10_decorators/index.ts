// 1 - exemplo decorator
function myDecorator(): any {
  console.log('Iniciando decorator!')

  return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Executando decorator!')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log('Terminando a execução do método')
  }
}

const myObj = new myClass()

myObj.testing()

// 2 - multiplos decorators
function a(): any {
  return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Executou A')
  }
}

function b(): any {
  return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Executou B')
  }
}

class MultipleDecorators {
  @a()
  @b()
  testing() {
    console.log('Terminando a execução')
  }
}

const multiple = new MultipleDecorators()

multiple.testing()

// 3 - class decorator
function classDec(constructor: User): any {
  console.log(constructor.name)
  if (constructor.name === 'User') console.log('Criando usuário!')
}

class User {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const lucas = new User('Lucas')

console.log(lucas)

// 4 - method decorator
function enumerable(value: boolean): any {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
    console.log({ descriptor })
  }
}

class Machine {
  name: string

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine('Trator')

console.log(trator.showName())

// 5 - acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster('Charmander', 20)

console.log(charmander)

// 6 - property decorator
function formatNumber() {
  return function (target: Object, propertyKey: string) {
    let value: string

    const getter = function () {
      return value
    }

    const setter = function (newVal: string) {
      value = newVal.padStart(5, '0')
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    })
  }
}

class ID {
  @formatNumber()
  id: string

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID('1')

console.log(newItem.id)

// 7 - exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id: number
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id: number

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)
const newPen = new Pen(55)

console.log(newBook)
console.log(newPen)

console.log(newBook.createdAt)

// 8 - exemplo real method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value
    console.log(childFunction)
    descriptor.value = function (...args: any[]) {
      if(args[1] === true) {
        console.log('Usuário já postou!')
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }
    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Meu primeiro post!', newPost.alreadyPosted)

newPost.post('Meu primeiro post!', newPost.alreadyPosted)
