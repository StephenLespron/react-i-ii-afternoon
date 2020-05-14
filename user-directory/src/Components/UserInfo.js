import React from 'react'

export default function UserInfo (props) {
    return (
        <div className='UserInfo'>
            <div id='numberOf'><p>{props.id}/{props.numOfPeople}</p></div>
            <div id='name'>{props.people[props.id - 1].name.first} {props.people[props.id - 1].name.last}</div>
            <div id='userDetails'>
                <div>From: <p>{props.people[props.id - 1].city}, {props.people[props.id - 1].country}</p>
                </div>
                <div>Job Title: <p>{props.people[props.id - 1].title}</p></div>
                <div>Employer: <p>{props.people[props.id - 1].employer}</p></div>
                </div>
            <div id='favMovies'> Favorite Movies:
                <ol>
                    <li>{props.people[props.id - 1].favoriteMovies[0]}</li>
                    <li>{props.people[props.id - 1].favoriteMovies[1]}</li>
                    <li>{props.people[props.id - 1].favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}