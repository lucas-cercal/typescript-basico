// 4 - importacao de componentes
import FirstComponent from "./components/FirstComponent"

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent"
import Destructuring, { Category } from "./components/Destructuring"

// 6 - useState
import State from "./components/State"

// 8 - types
type textOrNull = string | null

function App() {

  // 1 - variaveis
  const name: string = 'Lucas'
  const age: number = 30
  const isWorking: boolean = true

  // 2 - funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`
  }

  // 8 - type
  const myText: textOrNull = 'Tem algum texto aqui'
  let mySecondText: textOrNull = null

  // mySecondText = 'Opa'

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
      <SecondComponent name="segundo" />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        comentQty={10}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Algum conteúdo"
        comentQty={5}
        tags={["py"]}
        category={Category.P}
      />
      <State />
      {myText && <p>Tem texto na variável!</p>}
      {mySecondText && <p>Tem texto na variável!</p>}
    </div>
  );
}

export default App;
