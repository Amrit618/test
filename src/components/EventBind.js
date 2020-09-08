import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'hello'
        }
    }
    clickHandler(){
        this.setState({
            message:'Goodbye'
        })
    }
    
    render() {
        return (
            <div>
                {this.state.message}
                <button onClick={this.clickHandler.bind(this)}> Click</button>
            </div>
        )
    }
}

export default EventBind
