import { ReactElement } from 'react'

interface Props {
  title: string
  content: string
  comentQty: number
  tags: string[]
}

function Destructuring({ title, content, comentQty, tags }: Props): ReactElement {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {comentQty}</p>
      <div>
        {tags.map(tag => (
          <span key={tag}> #{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default Destructuring
