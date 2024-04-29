import {IUserResponse} from "./userInterface";
import FileHelpers from "../utils/fileHelpers";
import {usersDB as db} from "../../config";

export async function getAllUsers(): Promise<IUserResponse[]> {
    try {
        const users = await FileHelpers.readJsonFile(db)
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
