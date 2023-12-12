// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Testando generic'))
console.log(showData(true))
console.log(showData(['teste']))

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: 'Porta', color: 'Branca' }
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 }
const thirdObj = { price: 19.90, category: 'Roupa' }

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string,
  wheels: T,
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = { name: 'Fusca', wheels: 4, engine: 1.0, color: 'Branco' }
const myPen: Pen = { name: 'Caneta BIC', wheels: false, engine: false, color: 'Azul' }

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '2TB',
  ram: '32GB'
}

console.log(getSomeKey(server, 'ram'))
console.log(getSomeKey(server, 'hd'))
// console.log(getSomeKey(server, 'teste'))

// 5 - keyof type operator
type Character = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Character

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`
}

const myChar: Character = {
  name: 'Lucas',
  age: 24,
  hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))
console.log(showCharName(myChar, 'age'))
// console.log(showCharName(myChar, 'wtf'))

// 6 - typeof type operator
const userName: string = 'Lucas'

const userName2: typeof userName = 'Pedro'

// const userName3: typeof userName = 11

type x = typeof userName

const userName4: x = 'Tiago'
