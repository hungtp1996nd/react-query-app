import {useQuery} from "react-query";
import axios from "axios";

export const useSuperHeroData = (onSuccess, onError) => {

  const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheros')
  }

  return useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      enabled: false,
      onSuccess,
      onError,
      select: (data) => {
        const superHeroesName = data.data.map(hero => hero.name)
        return superHeroesName;
      }
    })
}
