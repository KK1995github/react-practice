import axios from 'axios'
import React, { useState } from 'react'

const AxiosPostData = () => {

  const data = {firstname:"", lastname:""}
  const[inputData, setInputData] = useState(data)

  const handleInput =(e) => {
    const {name, value} = e.target
    setInputData({...inputData,[name]:value})
  }


  const submitData =(e)=>{
   e.preventDefault()
   axios.post('https://jsonplaceholder.typicode.com/albums', inputData)
   .then((response) => {
      console.log(response);
   })
  }
   
  return (
    <div>
      <label> First Name:</label>
      <input type="text" name="firstname" value={inputData.firstname} onChange={handleInput} /><br />

      <label> Last Name:</label>
      <input type="text" name="lastname" value={inputData.lastname}  onChange={handleInput}/><br />
       <button onClick={submitData}>Submit</button>
    </div>
  )
}

export default AxiosPostData