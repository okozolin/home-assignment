//***********************************************************
// Generate a unique post id  for new posts
// based on date and userId
//***********************************************************
import {IPostRequest, IPostResponse} from "../post/postInterface";

export function generateUniqueId({ userId, date }: IPostRequest) {
    const timestamp = new Date(date).getTime();

    // Assuming userId is not longer than 6 digits
    return Number(`${userId}${timestamp}`);
}


//**********************************************************
// sort Posts by Date
//**********************************************************
export const sortPostsByDate = (posts: IPostResponse[]): IPostResponse[] => {
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};


//**********************************************************
// Test if an object is empty
//**********************************************************
export const isEmpty = (obj:any) => Object.keys(obj).length === 0;
