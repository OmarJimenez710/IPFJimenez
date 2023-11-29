import { createReducer, on } from "@ngrx/store";
import { authActions } from "./auth.actions";
import { IUser } from "src/app/models/user.model";


export const authFeatureKey = 'auth';

export interface State {
    authUser : IUser | null;
}

const initialState: State = {
    authUser : null,
}

export const reducer = createReducer(
    initialState,
    on(
        authActions.setAuthStudent, (state, { data }) => ({
            ...state,
            authUser : data
        })
    ),
    on(authActions.clearAuthStudent, ()=> initialState)
)