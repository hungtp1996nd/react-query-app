import React from 'react';
import {useSuperHeroData} from "../hooks/useSuperHeroData";

const RQRequest = () => {
  const onSuccess = (data) => {
    console.log('Callback success after successfully fetching', data)
  }

  const onError = (error) => {
    console.log('Callback error after successfully fetching', error)
  }

  const { isLoading, data, error, isError, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

  if (isLoading || isFetching ) return <h2>Loading...</h2>

  if (isError) return <h2>{error.message}</h2>

  return (
    <div>
      <h2>React Query Request</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {/*{
        data?.data.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>
        })
      }*/}
      {
        data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })
      }
    </div>
  )
}

export default RQRequest;
