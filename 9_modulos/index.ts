// 1 - importacao de arquivo
import importGreet from "./greet"

importGreet()

// 2 - importacao de variavel
import { x } from "./variable"

console.log(x)

// 3 - multiplas importacoes
import { a, b, myFunction } from "./multiple"

console.log(a)

console.log(b)

myFunction()

// 4 - alias
import { someName as name } from "./changename"

console.log(name)

// 5 - import all
import * as myNumbers from "./numbers"

console.log(myNumbers)

// 6 - importando tipos
import { Human } from "./mytype"

class User implements Human {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const lucas = new User('Lucas', 24)

console.log(lucas)
