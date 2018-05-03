import React from 'react'

// export default function(){
//     return <h1>Primeiro componente!</h1>
// }

// export default () => {
//     return <h2>FUNÇÃO ARROW!</h2>
// }

export default props => (
    <h1>{props.value}</h1>
)