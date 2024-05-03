import {
    SET_ACTIVE_USER,
    SET_USERS
} from "./usersActions.ts";
import {UsersActions, UsersState} from "./userInterface.ts";

export const usersReducer = (state: UsersState, action: UsersActions) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        case SET_ACTIVE_USER:
            return { ...state, activeUser: action.payload };
        default:
            return state;
    }
};