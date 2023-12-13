// 1 - exemplo decorator
function myDecorator(): any {
  console.log('Iniciando decorator!')

  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('Executando decorator!')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class myClass {
  @myDecorator()
  testing() {
    console.log('Terminando a execução do método')
  }
}

const myObj = new myClass()

myObj.testing()
