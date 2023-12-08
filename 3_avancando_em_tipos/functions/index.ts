
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
