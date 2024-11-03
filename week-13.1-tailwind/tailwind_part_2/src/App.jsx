import { useState } from 'react'
import './App.css'
import { SidebarClass1 } from './components/answers/1_basic_project'
import { Sidebar1 } from './components/sidebar/Sidebar1'
import {Sidebar2Transition} from './components/sidebar/Sidebar2Transition'
import {Sidebar4} from './components/sidebar/Sidebar4'

function App() {

  return (
    <div className= "h-screen bg-white bg-blue-600 text-black dark:text-white">
      <button onClick={() => setdarkmode(!darkmode)}>Toggle theme</button>
      {/* <Sidebar1/> */}
      {/* <Sidebar4 /> */}
      {/* <SidebarClass1/> */}
      {/* <Sidebar2Transition /> */}


    </div>
  )
}

export default App