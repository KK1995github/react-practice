import React, { useEffect, useState } from 'react'
import axios from './axios'


// const API = "https://fakestoreapi.com/products"
// isko ek file mei daal dengesrcfolder k ander axios.jsx

const BestWayAxios = () => {
    const [myData, setMyData]=useState([])
    const[isError, setIsError] =useState("")


        const getApiData = async ()=> {
        try {
            const res = await axios.get('/products')
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
         const{id, price, title, category } = value 
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



export default BestWayAxios