import { useMutation, useQuery, useQueryClient } from "react-query";
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
      onSuccess,
      onError,
      /*select: (data) => {
        const superHeroesName = data.data.map(hero => hero.name)
        return superHeroesName;
      }*/
    })
}

export const useAddingSuperHero = () => {
  const queryClient = useQueryClient();
  return useMutation(handleAddSuperHero, {
    // using invalidate queries to handle adding pattern --> auto fetch get list when the posting is successfully
    /*onSuccess: async () => {
       await queryClient.invalidateQueries('super-heroes')
    }*/

    // using response of mutation to handle adding logic by clone old query and append new data
    onSuccess: (newData) => {
      queryClient.setQueryData('super-heroes', (oldQuery) => {
        return {
          ...oldQuery,
          data: [...oldQuery.data, newData.data],
        }
      })
    }

  })
}
