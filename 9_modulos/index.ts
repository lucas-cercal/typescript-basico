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
