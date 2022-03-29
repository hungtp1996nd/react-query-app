import React from 'react';
import { useQuery } from "react-query";
import axios from 'axios';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheros')
}

const RQRequest = () => {
  const { isLoading, data, error, isError, isFetching, refetch } = useQuery('super-heroes', fetchSuperHeroes, { enabled: false })

  if (isLoading || isFetching ) return <h2>Loading...</h2>

  if (isError) return <h2>{error.message}</h2>

  return (
    <div>
      <h2>React Query Request</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }
    </div>
  )
}

export default RQRequest;
