import React, { Component } from 'react'

class Field extends Component {
    constructor(props){
        super(props)
        this.state = { value: props.initialValue }
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <div>
                <label>{this.state.value}</label>
                <input onChange={this.handleChange} value={rhis.state.value} />
            </div>
        )
        
    }
}