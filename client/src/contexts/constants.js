export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "https://shielded-refuge-02682.herokuapp.com/api";

export const LOCAL_STORAGE_TOKEN_NAME = "learnit-mern";

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const GET_POST_BY_ID = "GET_POST_BY_ID";
export const POST_VIDEO = "POST_VIDEO";
export const CLOSE_POST_VIDEO = "CLOSE_POST_VIDEO";
