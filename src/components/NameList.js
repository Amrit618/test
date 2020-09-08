import React from 'react'

function NameList() {
    const names=[ 'Amrit','Ankit', 'Dipesh'] 
    return (
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>
        </div>
    )
}

export default NameList
