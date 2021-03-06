import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            unFilteredArray: [
                {
                    name: "Hunter",
                    major: 'Pre-Med',
                    age: 22,
                },
                {
                    name: "Danielle",
                    age: 18,
                    onCampus: true,
                },
                {
                    name: "Carson",
                    major: 'Computer Science',
                }
            ],
            userInput: '',
            filteredArray: [],
        }
    }

    handleChange(val) {
        if (val === '') {
            this.setState({filteredArray: []})
        }
        this.setState({ userInput: val })
    }

    filterObj(userInput) {
        let uArr = this.state.unFilteredArray;
        let fArr = this.state.filteredArray;
        for (let i = 0; i < uArr.length; i++) {
            if (userInput in uArr[i]) {
                fArr.push(uArr[i])
            }
        }

        this.setState({filteredArray: fArr,})
    }

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={e => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={() => this.filterObj(this.state.userInput)}>Click to Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    };
}


export default FilterObject;