import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import YearListItem from './yearListItem';
import './yearListContainer.css'

class yearListContainer extends Component {

    constructor( props ){
        super( props );
        this.state = {
            birthYear: this.props.birthYear
        }
    }

    render(){
        let livingYears = this.generateBirthInformation( this.props.birthYear );
        return (
            <div className="yearListContainer">
                <ListGroup as="ul" > 
                    {
                        livingYears.map( (year) => {
                            return (
                                <ListGroup.Item as="li" key={ year }> 
                                    <YearListItem indexYear={ year } birthYear={ this.state.birthYear }/> 
                                </ListGroup.Item>
                            );
                        }) 
                    }
                </ListGroup>
            </div>
        );
    }

    generateBirthInformation = ( birthYear ) => {
        let results = []; 
        let currentYear = new Date().getFullYear();
        console.log(birthYear);
        console.log( 'current year:' );
        console.log( currentYear );
        for( let indexYear = birthYear; indexYear <= currentYear; indexYear++ ){
            console.log('year: '+indexYear);
            results.push( indexYear );
        }
        return results;
    }
}

export default yearListContainer;