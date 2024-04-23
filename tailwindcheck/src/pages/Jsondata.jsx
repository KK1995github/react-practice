import React, { useState , useEffect} from 'react'

const Jsondata = () => {
    const [data,setData] = useState(null)
    const[isLoading, setIsLoading] =  useState(false)
    const[error, setError] =  useState(null)
   

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            setError(null)

         try {
            const response = await fetch('https://coronavirus.m.pipedream.net/')
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            const newData = await response.json()
            setData(newData) 
        } catch (error) {
             setError(error.message)
         } finally{
            setIsLoading(false)
         }

        }
        fetchData()
    }, [])
  return (
    <div>
    {isLoading && <p>Loading data...</p>}
    {error &&  <p>Error hai: {error}</p>}
    {data && (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )}
    </div>
  )
}

export default Jsondata