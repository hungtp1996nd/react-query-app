import {useMutation, useQuery} from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheros')
}

const handleAddSuperHero = (hero) => {
  return axios.post('http://localhost:4000/superheros', hero)
}

export const useSuperHeroData = (onSuccess, onError) => {
  return useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false,
      onSuccess,
      onError,
      /*select: (data) => {
        const superHeroesName = data.data.map(hero => hero.name)
        return superHeroesName;
      }*/
    })
}

export const useAddingSuperHero = () => {
  return useMutation(handleAddSuperHero)
}
