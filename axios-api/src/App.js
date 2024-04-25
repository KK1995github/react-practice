import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

// import Axiosprctice1 from './pages/Axiosprctice1'
// import Axioswithasync2 from './Axioswithasync2'
// import BestWayAxios from './BestWayAxios'
// import AxiosGetData from './pages/AxiosGetData'
// import AxiosPostData from './pages/AxiosPostData'
// import AxiosPostHeaders from './pages/AxiosPostHeaders'
// import UploadImage from './pages/UploadImage'
import AxiosPostFormData from './pages/AxiosPostFormData'

const App = () => {
  // const [myData, setMyData]=useState([])
  // const[isError, setIsError] =useState("")
  
  // // using Promises
  // useEffect(() => {
  //  axios.get('https://fakestoreapi.com/products')
  // //  .then((res) =>console.log( res.data))  /// data nu dekhn lyi response
  // //  hun datanu dikhayun lyi assi useState da use krange uper const ch value de ke 
  // .then((res) => setMyData(res.data))
  // .catch((error) => setIsError(error.message))
  // })


  return (
    <div>
      {/* <h1>Check DATA</h1>
      <div className='main-card'>
        {isError !== "" && <p>{isError}</p>}
      {myData.map((value) => {
         const{id, price,description, title, category } = value 
         return <div className='card' key={id}>
         <h3>{title}</h3>
         <h3>{price}</h3>
         <p>{category}</p>
         </div>
      })} */}
       {/* </div> */}

      

       {/* <BestWayAxios/> */}
       {/* <Axiosprctice1/> */}
        {/* <Axioswithasync2/> */}
       {/* <AxiosGetData/> */}
       {/* <AxiosPostData/> */}
       {/* <AxiosPostHeaders/> */}
       {/* <UploadImage/> */}
       <AxiosPostFormData/>
    </div>
  )
}

export default App