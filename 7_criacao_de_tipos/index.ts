// 1 - generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Testando generic'))
console.log(showData(true))
console.log(showData(['teste']))
