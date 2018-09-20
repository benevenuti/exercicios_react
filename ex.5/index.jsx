import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family>
        <h1>Família</h1>
        <Member name="Filipe" lastName="Benevenuti"/>
    </Family>
, document.getElementById('app'))
