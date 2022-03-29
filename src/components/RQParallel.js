import React from 'react'
import { useQuery } from "react-query";
import axios from 'axios'

const fetchSuperHero = () => {
  return axios.get('http://localhost:4000/superheros')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}

const RQParallel = () => {

  const { data: superHeroesData } = useQuery('super-heros', fetchSuperHero)
  const { data: friendsData } = useQuery('friends', fetchFriends)

  return (
    <>
      <div>
        {
          superHeroesData?.data?.map(hero => <div key={hero.name}>{hero.name}</div>)
        }
      </div>
      <div>
        {
          friendsData?.data?.map(friend => <div key={friend.name}>{friend.name}</div>)
        }
      </div>
    </>
  )
}

export default RQParallel;
