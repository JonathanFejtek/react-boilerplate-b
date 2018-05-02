import React from 'react';
import {Item} from './Item';

export class ItemList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                {this.props.items.map((item,i)=>{
                    return <Item onClick = {()=>this.props.toggleItem(i)} data = {item} />
                })}
            </div>
            
        )
    }
}