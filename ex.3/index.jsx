import React from 'react'
import ReactDOM from 'react-dom'
//import Componente, { Primeiro, Segundo } from './componente'
import Primeiro, { Segundo } from './componente'

ReactDOM.render(
    <div>
        <Primeiro/>
        <Segundo />
    </div>
, document.getElementById('app'))
