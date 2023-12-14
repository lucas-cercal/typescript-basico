// 4 - importacao de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring from "./components/Destructuring"

function App() {

  // 1 - variaveis
  const name: string = 'Lucas'
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo"/>
      <Destructuring 
        title="Primeiro post"
        content="Algum conteúdo"
        comentQty={10}
        tags={["ts", "js"]}
      />
    </div>
  );
}

export default App;
