const initialState = {
    dogImageGame2 :[],
    correctImage: null ,
}
const reducer = (state = initialState ,action = {}) => {
   switch(action.type) {
       case 'GET_DOG_IMAGE_GAME2':
       return {...state,dogImageGame2:[...action.payload]}

       default :
       return state 

   }

}