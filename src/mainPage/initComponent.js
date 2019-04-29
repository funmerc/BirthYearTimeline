import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BirthYearChanged } from '../actions/birthYearChangedAction';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './initComponent.css';
import YearListContainer from '../yearList/yearListContainer';

class InitComponent extends Component {
    constructor( props ){
        super( props );
        this.state = {
            birthYear: 0,
            showBirthYearInput: true
        };
    }

  render() {
    return (
        <div>
            <div>
                <h1>Birth Year Timeline</h1>
                { ( !this.state.showBirthYearInput )? <h3> { this.birthYearText() } </h3> : "" }
                { ( this.state.showBirthYearInput )? this.birthYearInputControl() : 
                    ( <Button variant="link" size="sm" onClick={ this.toggleBirthYearInput }>
                Edit
                </Button> ) }
            </div>
            <div>
                { (!this.state.showBirthYearInput)? <YearListContainer birthYear={this.props.BirthyearReducer.birthYear} /> : ""}
            </div>
        </div>
    );
  }

  birthYearText = () => {
      return (
        <span> My Birth Year: { this.props.BirthyearReducer.birthYear } </span>
      );
  }

  birthYearInputControl = () => {
    return ( 
        <div>
            <InputGroup className="mb-3" >
                <InputGroup.Prepend>
                    <InputGroup.Text id="birthYearInputField" className="input-group-cstm">Birth Year</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    aria-label="birthYearInput"
                    aria-describedby="birthYearInputField"
                    onChange={ this.birthYearUpdated }
                />
            </InputGroup>
            <Button variant="info" size="sm" block onClick={ this.showMyYearsSelected }>
                Show my years
            </Button>
        </div>  
    );
  }

  toggleBirthYearInput = () => {
    this.setState( { showBirthYearInput: !this.state.showBirthYearInput, birthYear: 0 } );
  }

  birthYearUpdated = ( event ) => {
      try{
          let yearNumber = parseInt( event.target.value );
          let date = new Date();
          if( yearNumber > 1800 && yearNumber <= date.getFullYear() ){
            this.setState( {
                birthYear : event.target.value
            } );
          }
      } catch( exception ){
          console.log( "Invalid input entered." );
      }
  }

  showMyYearsSelected = () => {
    if( this.state.birthYear > 1000 ){
        this.props.setBirthYear( this.state.birthYear );
        this.toggleBirthYearInput();
    }
  }
}

const mapStateToProps = state => { return { ...state }; }

const mapDispatchToProps = dispatch => ({
    setBirthYear: ( birthYear ) => dispatch ( BirthYearChanged( birthYear ) )
})

export default connect( mapStateToProps, mapDispatchToProps )( InitComponent );