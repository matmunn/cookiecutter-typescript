import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const Init: React.FC = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<Init />, document.getElementById('root'))
