import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:false
        }
    }
    
    render() {
        return(
            this.state.isLoggedIn?
            <div> <h1> Hello Guys</h1></div>:
            <div> <h1> Welcome Guys</h1></div>
        )
    //     if(this.state.isLoggedIn){
    //         return(
    //             <div> <h1> Hello Amrit</h1></div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div><h1> Welcome Guest</h1></div>
    //         )
    //     }
    // }
        // return (
        //     <div>
        //    <div> Hello Amrit </div>
        //     <div> Hello Santa</div>
        //     </div>
            
        // )
    }
}


export default UserGreeting
