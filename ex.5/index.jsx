import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
   <Family>
       <h1>Familia</h1>
       <Member name='Guilherme' lastName='Silva' />
   </Family>    
, document.getElementById("app"));



