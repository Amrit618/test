import React, { Component } from 'react'

 class Counter extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     increment(){
         this.setState({
             count:this.state.count+5
         })
         console.log(this.state.count)
     }

     
    render() {
        return (
            <div>
                count-{this.state.count}
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
