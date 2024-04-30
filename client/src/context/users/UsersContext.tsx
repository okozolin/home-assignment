import React, { createContext, useEffect, useReducer } from 'react';
import { usersReducer } from './usersReducer.ts';
import * as usersService from '../../services/usersService.ts'; // Assuming this is the correct path
import { SET_ACTIVE_USER, SET_USERS } from "./usersActions.ts";
import {generateRandomId} from "../../utils/utils.ts";

let getRandomId;
const initialState = {
    users: [],
    activeUser: undefined,
};

export const UsersContext = createContext(initialState);

export const UsersProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, initialState, (init)=> init);

    const loadUsers = async () => {
        try {
            const usersData = await usersService.fetchUsers();
            dispatch({ type: SET_USERS, payload: usersData });
        } catch (err) {
            console.error('Failed to load users:', err);
        }
    };

    const setUsers = usersData => {
        dispatch({ type: SET_USERS, payload: usersData });
    };
    const setActiveUser = user => {
        dispatch({ type: SET_ACTIVE_USER, payload: user });
    };

    const changeUser = () => {
        if (getRandomId) {
            const newUserId = getRandomId();
            const newUser = state.users.find(user => user.id === newUserId)
            setActiveUser(newUser);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    useEffect(() => {
        if (state.users.length > 0) {
            getRandomId = generateRandomId(state.users)
            changeUser();
        }
    }, [state.users]);

    const value = {
        ...state,
        setActiveUser,
        setUsers,
        changeUser
    };

    return (
        <UsersContext.Provider value={value}>
            {children}
        </UsersContext.Provider>
    );
};
