import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)
// provider  allows app/react to connect and communicate with redux store as it is passed into Provider
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, document.querySelector('#root'))
