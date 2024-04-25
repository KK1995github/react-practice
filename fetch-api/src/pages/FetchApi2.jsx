import React, { useEffect } from 'react'

const FetchApi2 = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    useEffect(()=>{
       fetch(url)
       .then(response => response.json( )).catch(e => {
        console.log(e)
       }) 

    },[])

  return (
    <div>FetchApi2</div>
  )
}

export default FetchApi2