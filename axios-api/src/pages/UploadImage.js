import axios from 'axios';
import React, { useState } from 'react'

const UploadImage = () => {
    const[image, setImage]= useState("")

    const handleImage=(e)=>{
console.log(e.target.files);
setImage(e.target.files[0]);
    }
    const handleSubmit=()=>{
    
        const formData= new FormData();
        
        formData.append("image", image)
        axios.post('http://localhost:4000/users',formData, {
            headers:{
                "Content-Type":"multiple/form-data",
            },
           
         })
         .then((response) => {
            console.log(response);
         })
    }
  return (
    <div>

        <input type='file'name='file' onChange={handleImage}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default UploadImage