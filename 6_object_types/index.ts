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
