/*
  Criar uma função que recebe review dos usuários, em seguida utilizar o narrowing para receber o dado;
  As possibilidades são boolean e number;
  Serão enviados números de 1 a 5 (estrelas), prever uma mensagem para cada uma destas notas;
  Ou false, que é quando o usuário não deixa uma review, prever um retorno para este caso também.
*/

function getReview(review: boolean | number) {
  switch (review) {
    case 1:
      console.log(`A review foi de ${review}`)
      break;
    case 2:
      console.log(`A review foi de ${review}`)
      break;
    case 3:
      console.log(`A review foi de ${review}`)
      break;
    case 4:
      console.log(`A review foi de ${review}`)
      break;
    case 5:
      console.log(`A review foi de ${review}`)
      break;
    case false:
      console.log('Sem review!')
      break;
  }
}

getReview(1)
getReview(2)
getReview(3)
getReview(5)
getReview(false)
