import { useContext } from 'react';
import { UsersContext } from '../context/users/UsersContext';
import {UserData} from "../types.ts";

const useUsers = ( userId : number) => {
    const { users } = useContext(UsersContext);

    const usersById = users.reduce((acc,cur) => {
        acc[cur.id] = cur
        return acc
    }, {})

    const user: UserData = userId && usersById ? usersById[userId] : undefined
    return { user }

};
export default useUsers;
