import * as request from 'superagent'

export function getDogRandomImageGame2CorrectAns() {
    return function (dispatch) {
        request('https://dog.ceo/api/breeds/image/random')
        .then (response => {
            console.log("response body from images :",response.body.message)
            dispatch ({
               type : 'GET_DOG_IMAGE_GAME2_CORRECTANS',
               payload : response.body.message
              
            })
        })
    }
}