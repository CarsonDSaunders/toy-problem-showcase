import React, { Component } from 'react';

class FilterString extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unFilteredArray: ['carson', 'pasta', 'arson', 'cars', 'car', 'nosrac'],
            userInput: '',
            filteredArray: [],
        }
    }

    handleChange(val) {
        this.setState({filteredArray: []})
        this.setState({ userInput: val })
    }

    filterDatString(userInput) {
        this.setState({filteredArray: [],})
        let uArr = this.state.unFilteredArray;
        let fArr = this.state.filteredArray;
        for (let i = 0; i < uArr.length; i++) {
            if (uArr[i].includes(userInput)) {
                fArr.push(uArr[i]);
            }
        }
        
        this.setState({filteredArray: fArr,});
        fArr = []
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className='puzzleText'></span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterDatString(this.state.userInput)}>Click to Filter</button>
                <span className="resultsBox filterStringRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    };
}


export default FilterString;