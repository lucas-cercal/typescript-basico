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
