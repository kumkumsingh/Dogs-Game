import * as request from 'superagent'

export function getDogRandomImageGame2() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/image/random/2')
        .then (response => {
            console.log("response body from images :",response.body.message)
            dispatch ({
               type : 'GET_DOG_IMAGE_GAME2',
               payload : response.body.message
              
            })
        })
    }
}