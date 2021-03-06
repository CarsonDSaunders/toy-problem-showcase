import React, { Component } from 'react';

class Sum extends Component {
    constructor(props) {
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
        }
    }

    handleChange1(val) {
        if (val === '') {
            this.setState({number1: 0})
        }
        this.setState({ number1: val })
    }

    handleChange2(val) {
        if (val === '') {
            this.setState({number2: 0})
        }
        this.setState({ number2: val })
    }

    summer(number1, number2) {
        let num1 = Number(number1)
        let num2 = Number(number2)
        let added = num1 + num2;

        this.setState({sum: added});
    }
    
    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' type='number' onChange={e => this.handleChange1(e.target.value)}></input>
                <input className='inputLine' type='number' onChange={e => this.handleChange2(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.summer(this.state.number1, this.state.number2)}>Click to Split</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    };
}


export default Sum;