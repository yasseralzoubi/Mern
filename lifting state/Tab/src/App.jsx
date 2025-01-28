import { useState } from 'react'
import './App.css'
import Tab from './components/Tab.jsx'
import Content from './components/Content.jsx'


function App() {
  const [clickedTab, setClickedTab] = useState(1)

  const update =(tab) => {
    setClickedTab(tab);
  }

  return (
    <>
   
    <Tab updateTap = {update} />
    <Content showContent = {clickedTab}/>


    </>
  )
}

export default App
