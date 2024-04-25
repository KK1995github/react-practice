import React, { useEffect, useState } from 'react'

const FetchApi1 = () => {
const [activity, setActivity] = useState({title:"", body:" "})

   const [data , setData] = useState([])
   const[isLoading, setIsLoading] = useState(null)
    


   
   //    for data get
      const getData = async() => {
       try {
           const res = await fetch('https://jsonplaceholder.typicode.com/posts')
          const jsondata = await res.json()
          setData(jsondata)
       } catch (error) {
           console.log(error);
       }
      }

//    onchange hndle
const handleChange =(e)=>{
      const {name, value} = e.target
      setActivity({...activity,[name]: value})
}

//    for data post
   const postData =  async () => {
      try {
        const res = await fetch('http://localhost:4000/users',{
           method:"POST",
           headers:{
            "Content-Type":"application/json",
           },
           body:JSON.stringify(activity)
        }
    )
         const jsondata = await res.json()
         setActivity(jsondata) 
        
      } catch (error) {
        console.log(error);
      }
   }

   useEffect(()=>{
    getData()
   },[]) 

  return (
    <div>
      <h2>List</h2>
      <input type='text' value={activity.title} name='title' onChange={handleChange}/>
      <input type='text' value={activity.body} name='body' onChange={handleChange}/>
      <button onClick={postData}> ok</button>



      {data.map((value, id) =>{
        return(
           <div key={id}>
            <p>{value.title}</p>
         
           </div>
        )
      })}
        
    </div>
  )
}

export default FetchApi1