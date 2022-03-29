import React from 'react'
import { useQueries } from "react-query";
import axios from 'axios'

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

const DynamicAndMultiQuery = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map(heroId => {
      return {
        queryKey: ['super-hero', heroId],
        queryFn: () => fetchSuperHero(heroId),
      }
    })
  )

  return (
    <>
      <div>Dynamic And Multi Query</div>
      <div>{console.log({ queryResults })}</div>
    </>
  )
}

export default DynamicAndMultiQuery;
