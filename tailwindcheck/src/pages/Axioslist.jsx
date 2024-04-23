import React from 'react'
import axios from 'axios'

const Axioslist = () => {

    const instance = axios.create({
        baseURL:'http://localhost:3000/posts',
        headers:{
            'Content-Type':'application/json'  // defaul headers for Json Data
        }
    })
    
  return (
    <div>Axioslist</div>
  )
}

export default Axioslist