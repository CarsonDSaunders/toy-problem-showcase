import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    evenAndOdder(inputs) {
        let inputArray = inputs.split(',');
        let evens = [];
        let odds = [];

        for (let i = 0; i < inputArray.length; i++) {
            inputArray[i] = Number(inputArray[i])
            if (inputArray[i] % 2 === 0) {
                evens.push(inputArray[i]);
            } else {
                odds.push(inputArray[i]);
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds,
        })
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={e => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.evenAndOdder(this.state.userInput)}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    };
}


export default EvenAndOdd;