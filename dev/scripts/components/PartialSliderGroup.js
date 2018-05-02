import React from 'react';
import {PartialSlider} from './PartialSlider';

export class PartialSliderGroup extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.values);
        return (
            <div className="partial-slider-group-container">
                {this.props.values.map((v, i)=>{
                    return <PartialSlider 
                        onChange = {(e) => {
                            this.props.partialChange(i,e.target.value)
                        }} 
                        value = {v} 
                        idx = {i}/>
                })}
            </div>
        )
    }
}