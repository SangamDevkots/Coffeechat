import React from 'react'
import AuthContext from '../AuthContext/AuthContext';
const Begining = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className=' mx-auto my-16 '>
          <div className=" h-40 w-40 rounded-full border overflow-hidden ">
          <img 
            src= {user.photoURL}
            alt="Avatar"
            className="h-full w-full "
          />
        </div>
<div className="div text-left">
<h5 className= ' text-2xl	  font-semibold '>   hello Cristiano ,<br /> this is the beginning of community chat</h5>
</div>
    </div>
  )
}

export default Begining
