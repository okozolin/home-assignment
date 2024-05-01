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

    const user: UserData = userId && usersById ? usersById[userId] : undefined
    return {
        user,
        users,
        activeUser
    }

};
export default useUsers;
