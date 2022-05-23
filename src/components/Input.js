import React, {useRef} from 'react'
import {usePeoplesStore} from '../store';
const Input = () => {
    const inputRef = useRef();
    const addPerson = usePeoplesStore(state => state.addPerson)
    const add = () =>{
        addPerson(inputRef.current.value);
        inputRef.current.value = ''
    }
  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={add}>Add Person</button>
    </div>
  )
}

export default Input