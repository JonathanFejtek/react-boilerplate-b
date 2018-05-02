import React from 'react';

export class Item extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h3 style = {this.props.data.toggled ? {color : "red"} : null}>{this.props.data.text}</h3>
                <button onClick = {this.props.onClick}>Toggle</button>
            </div>
        )
    }
}