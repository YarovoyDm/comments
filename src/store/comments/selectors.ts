import { createSelector } from "@reduxjs/toolkit";
import { IComments } from "types/comments";
import { RootState } from "..";

const selectAllComments = (state: RootState) => state.comments;

export const selectComments = createSelector(
    selectAllComments,
    (state: IComments) => state.comments,
);
