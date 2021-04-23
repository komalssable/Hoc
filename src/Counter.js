import React, { Component } from 'react'
import UpdatedComponent from './NewComponent'

class Counter extends Component {

    render() {
        const { count, clickHandler } = this.props
        return (
            <div>
                <button onClick={clickHandler}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(Counter)
