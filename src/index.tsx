import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.css'
import { Provider } from 'mobx-react'
import 'mobx-react-lite/batchingForReactDom'
import { Store } from './store'
import AppRouter from '@/routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <Provider {...Store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
