import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, authFeatureKey } from "./auth.reducer";


export const selectorAuthState = createFeatureSelector<State>(authFeatureKey);

export const selectAuthStudent = createSelector(selectorAuthState, (state) => state.authUser);