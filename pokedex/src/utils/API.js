import axios from "axios"

const baseURL = "https://pokeapi.co/api/v2/pokemon"

export function getPokeByName(name){
    return axios.get(`${baseURL}/${name}`)
}
