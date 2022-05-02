import React from 'react'
import nav_data from '../data/navBar_data'
const NavBar = () => {
  return (
    <div className='primary'>
        <ul>
           {nav_data.map((item, index)=>{
               return <li key={index}
               className='secondary'
               >{item}
               </li>
           })}
        </ul>
    </div>
  )
}

export default NavBar