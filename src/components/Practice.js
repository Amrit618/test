import React  from 'react'
import {useState} from 'react'


function Practice() {
    const[head, setHead]=useState(0)
    
    
    return (
        <>
           <h1>Amrit Bastakoti</h1>
           <h1> About Me</h1>
           <h2> Start-{head}</h2>
           <h2> {sethead+1}</h2>

        </>
    )
}

export default Practice
