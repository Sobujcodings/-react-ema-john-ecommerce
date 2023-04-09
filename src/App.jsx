import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/body/Body'
import Removecart from './components/removecart/Removecart'
import Shop from './components/shop/Shop'
import { Outlet } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App ">
    
    <Header></Header>

    <Outlet></Outlet>

    {/* akta component r parent component k korlei tar child compo thaklei show hoye jabe auto */}
    {/* <Removecart></Removecart> */}
    </div>
  )
}

export default App
