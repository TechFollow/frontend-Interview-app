import axios from "axios";

export const getBeers = () => axios.get(`/beers`);
export const postBeer = beer => axios.post(`/beers`, beer);
export const postBeerRate = (beerUuid, score) => axios.post(`/beers/${beerUuid}/rate`, { score });
