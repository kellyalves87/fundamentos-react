import React from 'react';
import DirectSon from './DirectSon'

//comunicação direta é passado via props

export default props => {
    return (
        <div>
            <DirectSon name='Igor' age={12} nerd='true' />
            <DirectSon name='Rebeca' age={8} nerd='true' />
            <DirectSon name='Bianca' age={4} nerd='false' />
            <DirectSon name='Liz' age={4} nerd='true' />
        </div>
    )
}