import * as request from 'superagent'

export function getDogRandomImageGame1(breedName) {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/image/random')
        .then (response => {
            console.log("response body from images :",response.body.message)
            dispatch ({
               type : 'GET_DOG_IMAGE_GAME1',
               payload : response.body.message
              
            })
        })
    }
}