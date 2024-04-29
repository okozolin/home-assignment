//***********************************************************
// Generate a unique post id  for new posts
// based on date and userId
//***********************************************************
import {IPostRequest} from "../post/postInterface";

export function generateUniqueId({ userId, date }: IPostRequest) {
    const timestamp = new Date(date).getTime();

    // Assuming userId is not longer than 6 digits
    return Number(`${userId}${timestamp}`);
}


//**********************************************************
// Test if an object is empty
//**********************************************************
export const isEmpty = (obj:any) => Object.keys(obj).length === 0;
