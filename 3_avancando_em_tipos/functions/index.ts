
function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4, 2)

//soma("a", "b")


function greeting(name: string): string {
  return `Olá ${name}`
}

console.log(greeting('Lucas'))

setTimeout(function () {
  const sallary: number = 1000
  //console.log(sallary)
}, 2000)

function passCoordinates(coord: { x: number, y: number }) {
  console.log('X coordinates: ' + coord.x)
  console.log('X coordinates: ' + coord.y)
}

const objCoord = { x: 329, y: 84.2 }

passCoordinates(objCoord)

const pessoaObj: { name: string, surname: string } = { name: "Lucas", surname: "Cercal Fontes" }

console.log(pessoaObj)

function showNumber(a: number, b: number, c?: number) {
  console.log("A " + a)
  console.log("B " + b)
  if (c) console.log("C " + c)
}

showNumber(1, 2, 3)
showNumber(1, 2)

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) return `Olá, ${firstName} ${lastName}, tudo bem?`
  return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Lucas", "Cercal"))
console.log(advancedGreeting("Lucas"))


function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")
// showBalance(true)

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") return "Usuário não aprovado!"
  return `A função do usuário é: ${role}`
}

console.log(showUserRole("Admin"))
console.log(showUserRole(false))


type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId(1)
showId('1')
