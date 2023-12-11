// 1 - void
function withoutReturn(): void {
  console.log('Esta função não tem retorno!')
}

withoutReturn()

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function isValidName(name: string): boolean {
  return name.length >= 3
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log('Preparando a função!')

  if (isValidName(userName)) {
    console.log('Nome válido. Realizando a saudação...')
    const greet = f(userName)
    console.log('Saudação realizada com sucesso!')
    console.log(greet)
  } else {
    console.log('Nome inválido para saudação.')
  }
}

preGreeting(greeting, 'Lucas')
preGreeting(greeting, 'Oi')
