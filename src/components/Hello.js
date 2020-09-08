import React from 'react';
const Hello=()=>{
    //return(
      //  <div> <h1> Hello Amrit</h1></div>
    //)
    return React.createElement(
        'div',
       { id: 'Hello', className:'dummyClass'},
        React.createElement('h1',null,'Hello Amrit')
    )
}
 
export default Hello ;