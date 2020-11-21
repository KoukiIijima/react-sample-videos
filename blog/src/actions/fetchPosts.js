import jsonPlaceholder from "../api/jsonPlaceholder";

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH?POSTS", payload: response });
};

export const selectPost = () => {
  return {
    type: "SELECT_POST",
  };
};
