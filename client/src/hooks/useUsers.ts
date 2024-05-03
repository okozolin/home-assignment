import {useContext, useMemo} from 'react';
import { UsersContext } from '../context/users/UsersContext';
import {UserData} from "../types.ts";

interface UsersById {
    [key: number]: UserData;
}

const useUsers = ( userId? : number) => {
    const { users, activeUser } = useContext(UsersContext);

    const usersById: UsersById  = useMemo(() => {
        return users.reduce((acc, cur) => {
            acc[cur.id] = cur;
            return acc;
        }, {} as UsersById);
    }, [users]);

    const getUserNamesByIds = (ids: number[]): string[] => {
        const filteredUsers = users.filter(user => ids.includes(user.id));
        return filteredUsers.map(user => user.name);
    }

    const user: UserData | undefined = userId && usersById ? usersById[userId] : undefined
    return {
        user,
        users,
        activeUser,
        getUserNamesByIds
    }

};
export default useUsers;
