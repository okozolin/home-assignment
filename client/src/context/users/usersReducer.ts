import {
    SET_ACTIVE_USER,
    SET_USERS
} from "./usersActions.ts";

export const usersReducer = (state, action) => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload };
        case SET_ACTIVE_USER:
            return { ...state, activeUser: action.payload };
        default:
            return state;
    }
};