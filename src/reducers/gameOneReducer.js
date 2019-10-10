
const gameOne = (state = [], action = {}) => {
  switch (action.type) {
    case "GAMEONE_IMAGE":
      return action.payload;

    default:
      return state;
  }
};

export default gameOne; 