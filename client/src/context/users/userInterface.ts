import {UserData} from "../../types.ts";
import {
    SET_ACTIVE_USER,
    SET_USERS
} from "./usersActions.ts";

interface SetUsersAction {
    type: typeof SET_USERS;
    payload: UserData[];
}
interface SetActiveUserAction {
    type: typeof SET_ACTIVE_USER;
    payload: UserData;
}

export type UsersActions = SetUsersAction | SetActiveUserAction

export interface UsersState {
    users: UserData[];
    activeUser?: UserData;
}