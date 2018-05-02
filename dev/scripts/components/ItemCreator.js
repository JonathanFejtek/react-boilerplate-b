import React from 'react';

import { connect } from 'react-redux'
import { addItem } from '../actions';

export class ItemCreator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            itemInput : ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    render(){
        return (
            <div>
                <input onInput = {this.handleInput} type="text"/>
                <button onClick = {() => this.props.onClick(this.state.itemInput)}>Add Item</button>
            </div>
        )
    }

    handleInput(e){
        this.setState({
            itemInput : e.target.value
        })
    }


}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {onClick : (text) => dispatch(addItem(text))}
}

ItemCreator = connect(mapStateToProps,mapDispatchToProps)(ItemCreator)