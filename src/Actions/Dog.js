import * as request from 'superagent'

export function getDogList() {
    return function (dispatch) {
      request('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          dispatch(setDogList(response.body))
        })
    }
  }