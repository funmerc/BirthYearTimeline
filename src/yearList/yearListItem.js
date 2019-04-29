import React, { Component } from 'react';
import './yearListItem.css';

class yearListItem extends Component {

    constructor( props ){
        super( props );
        this.state = {
            indexYear: this.props.indexYear,
            birthYear: this.props.birthYear
        }
    }

    render(){
        return (
            <div className="yearListItem">
                Year: { this.state.indexYear },  Age: { ( this.state.indexYear - this.state.birthYear ) }
            </div> 
        );
    }
}

export default yearListItem;