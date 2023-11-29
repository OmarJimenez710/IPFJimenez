import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { IUser } from "src/app/models/user.model";

export const authActions = createActionGroup({
    source: 'Auth',
    events: {
        'set Auth Student': props<{data : IUser}>(),
        'clear Auth Student': emptyProps(),
    }
})