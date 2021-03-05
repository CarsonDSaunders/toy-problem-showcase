import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            palindrome: '',
        }
    }

    handleChange(val) {
        if (val === '') {
            this.setState({palindrome: ''})
        }
        this.setState({ userInput: val })
    }

    findPali(userInput) {
        let lowered = userInput.toLowerCase();
        let rev = userInput.toLowerCase();
        rev = rev.split('');
        rev = rev.reverse();
        rev = rev.join('');

        if (rev === lowered) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <span className='puzzleText'></span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.findPali(this.state.userInput)}>Is it a palindrome?</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome} </span>
            </div>
        )
    };
}


export default Palindrome;