import * as UserService from "../user/userService";
import {Request, Response} from "express";

async function getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.status(200).json(users);
}

export {
    getAllUsers
}