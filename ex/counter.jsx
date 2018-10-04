import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {inc, dec, stepChanged} from './counterActions'

const Counter = props => (
    <div>
        <h1>{props.counter.number}</h1>
        <input onChange={props.stepChanged} type='number' value={props.counter.step}></input>
        <button onClick={props.dec}>Dec</button>
        <button onClick={props.inc}>Inc</button>        
    </div>
)

const mapStateToProds = state => ({counter: state.counter})
const mapDispatchToProps = dispatch => bindActionCreators({inc,dec,stepChanged}, dispatch)

export default connect(mapStateToProds, mapDispatchToProps)(Counter)
