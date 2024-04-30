import {IPostRequest, IPostResponse} from "./postInterface";
import {generateUniqueId, sortPostsByDate} from "../utils/helpers";
import FileHelpers from "../utils/fileHelpers";
import {postsDB as db} from "../../config";

async function getAllPosts(): Promise<IPostResponse[]> {
    try {
        const posts = await FileHelpers.readJsonFile(db) as IPostResponse[]
        return <IPostResponse[]>sortPostsByDate(posts)
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse[]>[]
    }
}

async function createPost(post: IPostRequest ): Promise<IPostResponse> {
    try {
        const newPostId = generateUniqueId(post)
        const newPost = {...post, id: newPostId}
        await FileHelpers.create(db, newPost)
        return <IPostResponse>newPost
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse>{}
    }
}
async function updatePost(post: IPostResponse): Promise<IPostResponse> {
    try {
        await FileHelpers.update(db, post)
        return <IPostResponse>post
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse>{}
    }
}
async function deletePost(post: IPostResponse): Promise<Boolean> {
    try {
        await FileHelpers.delete(db, post.id)
        return true
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return false
    }
}

export {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}