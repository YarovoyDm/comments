import {
    API_COMMENTS_ENDPOINT,
    DEFAULT_LIMIT_FOR_COMMENTS,
} from "constants/api";
import { IComments } from "types/comments";
import API from "../localAxios";

export const fetchComments = () => {
    return API.get<IComments>(API_COMMENTS_ENDPOINT, {
        params: { limit: DEFAULT_LIMIT_FOR_COMMENTS },
    });
};
