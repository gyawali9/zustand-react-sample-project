import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { usePeoplesStore } from '../store';
import useStore from '../store'

const People = () => {
  const people = usePeoplesStore(state => state.people)

  return (
    <div>
        <p>We have {people.length} people in our DB.</p>
        <ul>
            {people.map(p => (
                <li key={uuidv4()}>{p}</li>
            ))}
        </ul>
    </div>
  )
}
export default People
