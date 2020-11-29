// Reducerは受け取った値を加工して返すだけ。
// apiを叩いたり、DOMを返したりしてはいけない。
const postReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default postReducer