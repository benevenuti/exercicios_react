import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={legacy_createStore(reducers)}>
        <Field initialValue="Teste"/> 
    </Provider>
    , document.getElementById('app'))
