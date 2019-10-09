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

  export function getDogRandomImage() {
      return function (dispatch) {
          request('https://dog.ceo/api/breed/hound/images/random')
          .then (response => {
              dispatch ({
                 type : 'GET_DOG_IMAGE',
                 payload : response.body.message
              })
          })
      }
  }