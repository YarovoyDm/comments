import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { COMMENTS_SLICE } from "constants/comments";
import { IComment, IComments } from "types/comments";

const initialCommentsState = {
    comments: [],
} as IComments;

const commentsSlice = createSlice({
    name: COMMENTS_SLICE,
    initialState: initialCommentsState,
    reducers: {
        updateComments(state: IComments, action: PayloadAction<IComments>) {
            state.comments = action.payload.comments;
        },
        removeComment(
            state: IComments,
            action: PayloadAction<number | string>,
        ) {
            state.comments = state.comments.filter(
                item => item.postId !== action.payload,
            );
        },
        addComment(state: IComments, action: PayloadAction<IComment>) {
            state.comments.push(action.payload);
        },
    },
});

export default commentsSlice.reducer;
export const { updateComments, removeComment, addComment } =
    commentsSlice.actions;
