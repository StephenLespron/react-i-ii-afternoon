import React from 'react'

export default function Buttons (props) {
    return (
        <div className='Buttons'>
          <button className='previous-next' onClick={() => props.previousPerson()}>&lt; Previous</button>
            <div id="Buttons2">
                <button className='edit-delete-new'>Edit</button>
                <button className='edit-delete-new'>Delete</button>
                <button className='edit-delete-new'>New</button>
            </div>
          <button className='previous-next' onClick={() => props.nextPerson()}>Next &gt;</button>
        </div>
    )
}