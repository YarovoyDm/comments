import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IComments } from "../../types/comments";

const selectPokemons = (state: RootState) => state.comments;

export const selectComments = createSelector(
    selectPokemons,
    (state: IComments) => state.comments,
);
