import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import Order from './components/navbar-compo/Order'
import OrderReview from './components/navbar-compo/OrderReview'
import Manageinventory from './components/navbar-compo/manageinventory'
import Login from './components/navbar-compo/login'
import Home from './components/Home/Home'
import CustomCartLoader from './components/Customloader/CustomLoader'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [

      //default ata dekhabe (link e click korle sheta outlet e jeye boshbe)
      {
        path: '/',
        element: <Home></Home>,
      },


      {
        path: '/order',
        element:  <Order></Order>,
        loader: CustomCartLoader 
        // loader:()=>fetch('product.json')
        // ata useloader() hook diye use korte parbo Order compo t
        //direct custom loader functin k boshiye fetch hoye jabe instead of this
        // ai loader function ja return korbe ta amra order compo t use korte parbo
      },

      {
        path: '/orderReview',
        element: <OrderReview></OrderReview>
      },

      {
        path: '/manageInventory',
        element: <Manageinventory></Manageinventory> ,
      },
      {
        path: '/login',
        element:  <Login></Login>,
      },

    ]
  }])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
