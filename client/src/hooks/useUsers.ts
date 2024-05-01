import {useContext, useMemo} from 'react';
import { UsersContext } from '../context/users/UsersContext';
import {UserData} from "../types.ts";

const useUsers = ( userId? : number) => {
    const { users, activeUser } = useContext(UsersContext);

    const usersById = useMemo(() => {
        return users.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {});
    }, [users]);

    const getUserNamesByIds = (ids: number[]): string[] => {
        const filteredUsers = users.filter(user => ids.includes(user.id));
        return filteredUsers.map(user => user.name);
    }

    const user: UserData = userId && usersById ? usersById[userId] : undefined
    return {
        user,
        users,
        activeUser,
        getUserNamesByIds
    }

};
export default useUsers;
