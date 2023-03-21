import { Genre } from "../models/Genre";
import axios from 'axios';

const endpoint = "https://api.themoviedb.org/3/";
const api_key = "?api_key=" + process.env.REACT_APP_TMDB_API_KEY_V3;

export const getGenres = () => {
    return axios.get(`${endpoint}genre/movie/list${api_key}`)
    .then(
        response => {
            return response.data;
        }
    )
    .catch( 
        error => {
            console.log(error);
        }
    );
}


// add genre to preferences 


// get movies by genre(s)
