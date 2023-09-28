import React from 'react'
import Begining from './Begining';
const NavBar = ({name}) => {
  return (
<>

<nav>

<div className="container flex justify-center bg-gray-800 py-4  text-white rounded-md ">
  <ul>


    <li>
      <h1>{name}</h1>
      <p>Online</p>
    </li>
  </ul>


</div>



</nav>



<Begining />
</>
  )
}

export default NavBar;
