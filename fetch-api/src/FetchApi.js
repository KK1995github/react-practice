import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [data,setData] =useState([])

    const getData= async()=>{
        try {
            const response = await fetch("http://localhost:4000/users")
            const jsonData= await response.json();
            setData(jsonData)
            // console.log(jsonData)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>

{data.map((item,index)=>(
    <div key={index}>
        <p>{item.title}</p>
        <p>{item.id}</p>
        <p>{item.body}</p>
        </div>
))}
 
    </div>
  )
}

export default FetchApi