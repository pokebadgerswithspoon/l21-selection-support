import React from 'react'
import { withSelection } from 'l21-selection-support'

const handleClick = () => alert('Here could be your custom action')
const ExampleAction = ({ list }) => (<>
  Selected ids: [{list.join(',')}]
  <br/>
  { list.length > 0 && <button onClick={handleClick}>Go!</button> }
</>
)

export default withSelection(ExampleAction)
