import * as request from 'superagent';

export function renderGameImage() {
    return function (dispatch) {
      request('https://dog.ceo/api/breeds/image/random')      
        .then(response => {
          console.log('action?');
          dispatch({
            type : 'GAMEONE_IMAGE',  
            payload : response.body.message
        })
    }) 
  }
}