import React from 'react'
import Begining from './Begining';
const NavBar = () => {
  return (
<>

<nav>

<div className="container flex justify-center bg-gray-800 py-4  text-white rounded-md ">
  <ul>


    <li>
      <h1>community chat</h1>
      <p>100 people online</p>
    </li>
  </ul>


</div>



</nav>



<Begining />
</>
  )
}

export default NavBar;
