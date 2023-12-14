import { ReactElement } from 'react'

interface Props {
  title: string
  content: string
  comentQty: number
  tags: string[]
  // 8 - enum
    category: Category
}

export enum Category {
  JS = 'Javascript',
  TS = 'Typescript',
  P = 'Python'
}

function Destructuring({ title, content, comentQty, tags, category }: Props): ReactElement {
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
      <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destructuring
