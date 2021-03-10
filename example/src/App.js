import React from 'react'

import { useMyHook } from '@kurted/react-custom-element'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
