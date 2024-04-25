import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosGetData = () => {
      const [apidata, setData] = useState([])
    
      useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        // .then((response) => console.log(response))
        .then((response) => setData(response.data))
      })

  return (
    <div>
        {apidata.map((value, id) => {
            return(
                <div key={id}>
                    <p>{value.title}</p>
                </div>
            )
        })}
    </div>
  )
}

export default AxiosGetData