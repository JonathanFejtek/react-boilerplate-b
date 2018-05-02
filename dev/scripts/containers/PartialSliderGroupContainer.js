import { connect } from 'react-redux';
import { PartialSliderGroup } from '../components/PartialSliderGroup';
import {setSinePartial, setCosPartial} from '../actions'
import React from 'react'


export class PartialSliderGroupContainer extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="partial-slider-group-container">
                <PartialSliderGroup 
                    values = {this.props.sinePartials} 
                    partialChange = {this.props.sineChange}
                />
                <PartialSliderGroup 
                    values = {this.props.cosPartials}
                    partialChange = {this.props.cosChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let props = {
        sinePartials : state.data.partialData.sinePartials,
        cosPartials : state.data.partialData.cosPartials,
        linkPartials : state.data.partialData.linkPartials
    }

    console.log(props);
    return props;
}

const mapDispatchToProps = (dispatch) => {
    return {
        sineChange : (id, value) => dispatch(setSinePartial(id,value)),
        cosChange : (id, value) => dispatch(setCosPartial(id,value))
    }
}

PartialSliderGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PartialSliderGroupContainer)