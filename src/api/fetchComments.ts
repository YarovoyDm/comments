import API from "../axios";
import { API_COMMENTS_ENDPOINT } from "../constants/api";
import { IComments } from "../types/comments";

export const fetchComments = () => {
    return API.get<IComments>(API_COMMENTS_ENDPOINT);
};
