import { ReactElement, useState, ChangeEvent } from 'react'

function State(): ReactElement {
  const [text, setText] = useState<string | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <div>
      <h1>O meu texto é: {text}</h1>
      <input type='text' onChange={handleChange} />
    </div>
  )
}

export default State
