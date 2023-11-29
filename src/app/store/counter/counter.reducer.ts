import { createReducer, on } from "@ngrx/store";
import { CounterActions } from "./counter.actions";

export const counterFeatureName = 'counter'

export interface ICounterState {
    value : number
}

const initialState : ICounterState = {
    value: 0
}


export const reducer = createReducer (
    initialState, 

    on(CounterActions.sumar, (state)=>{ //CounterAction es el .ts que creamos previamente 
        return {
            ...state,
            value: state.value +1 //se incrementa en 1, no podemos usar ++ porque choca con lo de inmutabilidad 
        };
    }),

    on(CounterActions.restar, (state)=>{
        return {
            ...state,
            value: state.value -1
        };
    })
);