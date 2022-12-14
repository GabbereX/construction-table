import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/main.local.scss'
import { Container } from './components/views/Container'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
)
