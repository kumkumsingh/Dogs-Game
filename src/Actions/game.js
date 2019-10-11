import * as request from 'superagent'

export function getRandomImageGame() {
    return function (dispatch) {
      request('https://dog.ceo/api/breeds/image/random')
        .then(response => {
          dispatch({
            type : 'GET_RANDOM_IMAGE',
            payload : response.body.message
        })
    })
}}

//complete