// 3 - componentes
import { ReactElement, useContext } from 'react'

import { AppContext } from '../App'

function Context(): ReactElement {
  const details = useContext(AppContext)
  return <>
    {details && (
      <div>
        <h2>Linguagem: {details.language}</h2>
        <h4>Framework: {details.framework}</h4>
        <p>Quantiade: {details.projects}</p>
      </div>
    )}
  </>
}

export default Context
