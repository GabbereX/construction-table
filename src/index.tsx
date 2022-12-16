import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store/store'

import { Container } from './components/views/Container'

import './styles/main.local.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
  {/*<React.Fragment>*/}
    <Provider store = {store}>
      <Container />
    </Provider>
  {/*</React.Fragment>*/}
  </React.StrictMode>
)
