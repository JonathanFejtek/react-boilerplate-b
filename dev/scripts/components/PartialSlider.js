import React from 'react';

export class PartialSlider extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="partialslider-container">
                <input className = "partialslider" value = {this.props.value} min = "0" max = "1" step = "0.1" onChange = {this.props.onChange} type="range"/>
            </div>
        )
    }
}