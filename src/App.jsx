
import { useState } from 'react';
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Chart from './components/Chart';
function App() {
  const routes = [
    {
      id: 1,
      path: "home",
      element: "HomeComponent"
    },
    {
      id: 2,
      path: "about",
      element: "AboutComponent"
    },
    {
      id: 3,
      path: "services",
      element: "ServicesComponent"
    },
    {
      id: 4,
      path: "contact",
      element: "ContactComponent"
    },
    {
      id: 5,
      path: "faq",
      element: "FAQComponent"
    }
  ];
  const [value,setValue]=useState(true)
  console.log(value)
  const handleClick =()=>{
    setValue(!value)
  }
  return (
    <div>
      <div className='md:flex gap-8 items-center'>
      <div className='md:hidden' onClick={handleClick}>
      {
        value?<GiHamburgerMenu className='text-2xl'></GiHamburgerMenu>:<RxCross2 className='text-2xl'></RxCross2>
      }

      </div>
      <h1 className='text-3xl font-semibold'>Logo</h1>
        <div className={`md:flex gap-9 font-bold items-center duration-1000 ${value?'-ml-48 md:ml-36':''}`}>
          {
            routes.map(route=><Navbar key={route.id} route={route}></Navbar>)
          }
        </div>
    </div>
    <Chart></Chart>
    </div>
  )
}

export default App
