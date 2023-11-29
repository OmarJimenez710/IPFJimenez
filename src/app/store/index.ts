import { ActionReducerMap } from "@ngrx/store";
import { counterFeatureName, reducer as counterReducer } from "./counter/counter.reducer";
import { authFeatureKey, reducer as authReducer } from "./auth/auth.reducer";


// export const appReducer : ActionReducerMap<any> = {
//     [counterFeatureName] : counterReducer
// };

export const appReducer : ActionReducerMap<any> = {
    [authFeatureKey]: authReducer
}