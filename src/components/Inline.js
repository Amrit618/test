import React from 'react'
const heading={
    fontSize:'90px',
    color:'grey'
}

function Inline() {
    return (
        <div>
            <h1 style={heading}> Inline</h1>
            <h1 className='error'>Amrit</h1>
        </div>
    )
}

export default Inline
