import {Action, configureStore, ThunkAction} from "@reduxjs/toolkit";
import {loginReducer} from "./login";
import {passwordReducer} from "./password";

export const store = configureStore({
    reducer: {
        login: loginReducer,
        password: passwordReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>