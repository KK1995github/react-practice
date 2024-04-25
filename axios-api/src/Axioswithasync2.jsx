import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axioswithasync = () => {
    const [myData, setMyData]=useState([])
    const[isError, setIsError] =useState("")


    // const getApiData = async ()=> {
        
    //  const res = await axios.get('https://fakestoreapi.com/products')
    //  setMyData(res.data)
    // }

    //yha humne error hndling k liy try{} catch{ ka use kiya}
     const getApiData = async ()=> {
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            setMyData(res.data)
        } catch (error) {
           setIsError(error.message) 
        }
    
        }
    

// use effect mei getapi
     useEffect(() => {
         getApiData() 
     },[])

  return (
    <div>
       <div className='main-card'>
        {isError !== "" && <p>{isError}</p>}
      {myData.map((value) => {
         const{id, price,description, title, category } = value 
         return <div className='card' key={id}>
         <h3>{title}</h3>
         <h3>{price}</h3>
         <p>{category}</p>
         </div>
      })}
       </div>

    </div>
  )
}

export default Axioswithasync