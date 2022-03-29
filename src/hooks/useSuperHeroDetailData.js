import {useQuery} from "react-query";
import axios from 'axios'

const fetchHeroDetail = (heroId) => {
  return axios.get(`http://localhost:4000/superheros/${heroId}`)
}

export const useSuperHeroDetailData = (heroId) => {
  return useQuery(['hero-detail', heroId], () => fetchHeroDetail(heroId))
}
