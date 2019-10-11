import * as request from 'superagent'
export default function startGame() {
    return function (dispatch) {
      request(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images/random/3`)
        .then(response => {
          dispatch({
            type: 'START_GAME',  
            payload: response.body.message     
        })
      })
    }
}


