import axios from 'axios';


export function getMovieList() {
    return function (dispatch) {
        return axios.get('/getMovieList').then(response => {
            dispatch({type: 'ADD_MOVIES', payload: response.data})
        })
    }
}
