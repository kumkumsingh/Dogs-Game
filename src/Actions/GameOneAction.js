import * as request from 'superagent'

export const renderGameImage = () => {
    return function (dispatch) {
      request('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          dispatch({
            type : 'SET_DOGS_LIST',  
            payload : Object.keys(response.body.message)})
        })
    }
  }
