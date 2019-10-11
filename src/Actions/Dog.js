import * as request from 'superagent'

export function getDogList() {
    return function (dispatch) {
      request('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          dispatch({
            type : 'SET_DOGS_LIST',  
            payload : Object.keys(response.body.message)})
        })
    }
  }

  export function getDogRandomImage(breedName) {
      return function (dispatch) {
          request(`https://dog.ceo/api/breed/${encodeURIComponent(breedName)}/images/random/10`)
          .then (response => {
              console.log("response body from images :",response.body.message)
              dispatch ({
                 type : 'GET_DOG_IMAGE',
                 payload : response.body.message
                
              })
          })
      }
  }