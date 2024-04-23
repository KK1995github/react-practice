import React , {useEffect, useState}from 'react'


export const Firstapi = () => {
    const [data, setData ] = useState([])
    const url='http://localhost:4000/posts'
    useEffect(()=>{
        fetch(url).then(resp=> resp.json()).then(d=>setData(d))
    },[])
  return (
    <div>
        {data.map((value)=>{
    
     return <h1>{value.title}{value.tags}</h1>
        })}
    </div>
  )
}
