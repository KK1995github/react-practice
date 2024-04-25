import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axiosprctice = () => {

  const[userData, setUserData] = useState([])

    useEffect(()=>{ 
     axios.get("https://jsonplaceholder.typicode.com/users")
          .then((response) => {
            console.log(response);
            setUserData(response.data)
          })
    }, [])

  return (
    <div>
        {userData.map((value) => {
            return(
                <div>{value.username}</div>
            )
        } )}
    </div>
  )
}

export default Axiosprctice