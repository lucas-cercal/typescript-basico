// 1 - tipo de objeto para função com interface
interface Product {
  name: string,
  price: number,
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if (product.isAvailable) console.log('O produto está disponível')
}

const shirt: Product = {
  name: 'Camiseta',
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({ name: 'Tênis', price: 129.99, isAvailable: false })

// 2 - propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if (user.role) console.log(`A função do usuário é: ${user.role}`)
}

const u1: User = { email: 'bianca@email.com', role: 'admin' }
const u2: User = { email: 'sarah@email.com' }

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
  brand: string,
  readonly wheels: number
}

const fusca: Car = {
  brand: 'VW',
  wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15

console.log(coords)

// coords.z = 'teste'

// 5 - extending interfaces
interface Human {
  name: string,
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const lucas: Human = {
  name: 'Lucas',
  age: 24
}

console.log(lucas)

const vegeta: SuperHuman = {
  name: 'Vegeta',
  age: 48,
  superpowers: ['Air Dance Technique', 'Big Bang Attack', 'Cosmic Death Shower']
}

console.log(vegeta)

// 6 - intersection types
interface Character {
  name: string
}

interface Gun {
  type: string,
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: 'Arnold',
  type: 'Shotgun',
  caliber: 12
}

console.log(arnold)

// 7 - readonly array
let myArray: ReadonlyArray<string> = ['Maçã', 'Laranja', 'Banana']

// myArray[3] = 'Mamão'

console.log(myArray)

myArray.forEach((item) => {
  console.log('Fruta: ', item)
})


myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

//number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6 ]
// const myNumberArray3: fiveNumbers = [1, true, 'teste', 4, 5 ]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ['Lucas', 24]

console.log(anotherUser[0])

anotherUser[0] = 'João'

console.log(anotherUser[0])

// anotherUser[1] = 'teste'
