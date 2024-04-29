import {IUserResponse} from "./userInterface";
import {dbType} from "../types";

export async function getAllUsers(db:dbType): Promise<IUserResponse[]> {
    try {
        const users = await import(db)
        return <IUserResponse[]>users
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting users`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IUserResponse[]>[]
    }
}