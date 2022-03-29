import { useQuery, useQueryClient } from "react-query";
import axios from 'axios'

const fetchHeroDetail = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const useSuperHeroDetailData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(
    ['hero-detail', heroId],
    () => fetchHeroDetail(heroId),
    {
      // when chosen "slow 3G" at network tab, click into detail hero --> Loading progress occur
      // initial data make quick action when showing detail by caching with Javascript logic --> not using query
      initialData: () => {
        const hero = queryClient.getQueryData('super-heroes')?.data?.find(hero => hero.id === parseInt(heroId))
        if (hero) {
          return { data: hero }
        } else {
          return undefined;
        }
      }
    }
  )
}
