import { createSelector } from "@reduxjs/toolkit";
import { IComments } from "types/comments";
import { RootState } from "..";

const selectPokemons = (state: RootState) => state.comments;

export const selectComments = createSelector(
    selectPokemons,
    (state: IComments) => state.comments,
);
