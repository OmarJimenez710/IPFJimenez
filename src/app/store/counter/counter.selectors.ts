import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICounterState, counterFeatureName } from "./counter.reducer";


export const selectCounterState = createFeatureSelector<ICounterState>(counterFeatureName); 

export const selectCounterValue = createSelector(
    selectCounterState, (state)=> state.value
)