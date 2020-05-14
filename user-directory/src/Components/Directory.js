import React, { Component } from 'react'
import UserInfo from './UserInfo'
import Buttons from './Buttons'
import data from '../data'

export default class Directory extends Component {
    constructor(){
        super()
        this.state = {
            people: data,
            id: 1,
        }

        this.nextPerson = this.nextPerson.bind(this)
        this.previousPerson = this.previousPerson.bind(this)
    }

    nextPerson(){
        if(this.state.id < this.state.people.length){
        this.setState({
        id: this.state.id + 1
        })}  
    }
previousPerson(){
    if(this.state.id > 1){
        this.setState({
        id: this.state.id - 1
        })}
    }


    render(){
        return(
            <div className="Directory">
                <UserInfo 
                id={this.state.id} 
                numOfPeople={this.state.people.length}
                people={this.state.people}/>
                <Buttons nextPerson={this.nextPerson} previousPerson={this.previousPerson}/>
            </div>
        )
    }
}