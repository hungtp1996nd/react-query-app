import React, { useState, useEffect } from "react";
import axios from 'axios'

const TraditionalRequest = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    axios.get('http://localhost:4000/superheros')
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      }).catch((error) => {
        setError(error.message);
        setIsLoading(false);
    })
  }, [])

  if (isLoading) return <h2>Loading...</h2>

  if (error) return <h2>{error}</h2>

  return (
    <div>
      <h2>Traditional Request</h2>
      {
        data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </div>
  )
}

export default TraditionalRequest;