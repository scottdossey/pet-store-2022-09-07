import React from 'react';

class AppOldWay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petList: [],
            petName: "",
            petBreed: "",
            petAge: ""
        };
    }

    handleNameInput = (event) => {
        this.setState({
            petName: event.currentTarget.value
        });        
    }
   
    handleBreedInput = (event) => {
        this.setState({
            petBreed: event.currentTarget.value
        });        
    }

    handleAgeInput = (event) => {
        this.setState({
            petAge: event.currentTarget.value
        });        
    }

    handleClick = (event) => {
        let petObject = { name: this.state.petName, 
                          breed: this.state.petBreed, 
                          age: this.state.petAge };

        this.setState({
            petList: [...this.state.petList, petObject],
            petName: "",
            petBreed: "",
            petAge: ""
        });                      
    }
    
    render() {
        let petElementArray = this.state.petList.map((animal, index) => {
            return (
            <div key={index}>
                <div>Name: {animal.name}</div>        
                <div>Breed: {animal.breed}</div>
                <div>Age: {animal.age}</div>
            </div>
            )
        })

        return (
            <div>
            <h4>Pet Store Animal List</h4>
            {petElementArray}
            <input value={this.state.petName} onChange={this.handleNameInput} type="text" 
                    placeholder="Pet Name"/>
            <input value={this.state.petBreed} onChange={this.handleBreedInput} type="text"
                    placeholder="Pet Breed"/>
            <input value={this.state.petAge} onChange={this.handleAgeInput} type="text"
                    placeholder="Pet Age"/>

            <button onClick={this.handleClick}>Add Animal</button>
            </div>
        )
    }

};


export default AppOldWay;
