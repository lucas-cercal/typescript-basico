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

const myObj = { name: 'Porta', colour: 'Branca' }
const otherProduct = { name: 'Carro', wheels: 4, engine: 1.0 }
const thirdObj = { price: 19.90, category: 'Roupa' }

console.log(showProductName(myObj))
console.log(showProductName(otherProduct))
// console.log(showProductName(thirdObj))
