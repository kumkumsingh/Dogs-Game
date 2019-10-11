const initialState = {
  dogImageGame1: null,
  correctAnswer: null
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_DOG_IMAGE_GAME1":
      return {
        dogImageGame1: action.payload,
        correctAnswer: action.payload.split("/")[4].split("-")[0]
      };

    default:
      return state;
  }
};

export default reducer;
