import React, { useState } from 'react';
import { useSuperHeroData, useAddingSuperHero } from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";

const RQRequest = () => {
  const [name, setName] = useState('')
  const [alterEgo, setAlterEgo] = useState('')

  const onSuccess = (data) => {
    console.log('Callback success after successfully fetching', data)
  }

  const onError = (error) => {
    console.log('Callback error after successfully fetching', error)
  }

  const { mutate: addHero } = useAddingSuperHero();

  const handleAddingHero = () => {
    const hero = { name, alterEgo }
    addHero(hero)
  }

  const { isLoading, data, error, isError, isFetching, refetch } = useSuperHeroData(onSuccess, onError)

  if (isLoading || isFetching ) return <h2>Loading...</h2>

  if (isError) return <h2>{error.message}</h2>

  return (
    <div>
      <h2>React Query Request</h2>
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={alterEgo} onChange={e => setAlterEgo(e.target.value)} />
        <button onClick={handleAddingHero}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {
        data?.data.map((hero) => {
          return <div key={hero.name}>
            <Link to={`/rq/${hero.id}`}>{hero.name}</Link>
          </div>
        })
      }
      {/*{
        data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>
        })
      }*/}
    </div>
  )
}

export default RQRequest;
