import React, { useEffect } from 'react'
import People from './components/People'
import Input from './components/Input'
import {useSettingsStore, usePeoplesStore} from './store'

const App = () => {
  const toggleDark = useSettingsStore(state=>state.toggleDark)
  const dark = useSettingsStore(state=>state.dark)

  useEffect(()=>{
    if(dark){
      document.querySelector('body').classList.add('dark')
    }else{
      document.querySelector('body').classList.remove('dark')
    }
  },[dark])
  return (
    <div className="App">
      <button onClick={toggleDark}>Toggle Dark Mode</button>
      <p>People</p>
      <People />
      <Input />
    </div>
  )
}

export default App