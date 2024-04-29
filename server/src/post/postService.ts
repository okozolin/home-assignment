import {IPostRequest, IPostResponse} from "./postInterface";
import {dbType} from "../types";
import {generateUniqueId} from "../utils/helpers";

async function getAllPosts(db:dbType): Promise<IPostResponse[]> {
    try {
        const posts = await import(db)
        return <IPostResponse[]>posts
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse[]>[]
    }
}

async function createPost(db:dbType, post: IPostRequest ): Promise<IPostResponse[]> {
    try {
        const posts = await getAllPosts(db)
        const newPostId = generateUniqueId(post)
        const newPost = {...post, id: newPostId}
        const updated = await updateFile(newPost)
        return <IPostResponse[]>updated
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse[]>[]
    }
}
async function updatePost(db:dbType): Promise<IPostResponse[]> {
    try {
        const posts = await import(db)
        return <IPostResponse[]>posts
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse[]>[]
    }
}
async function deletePost(db:dbType): Promise<IPostResponse[]> {
    try {
        const posts = await import(db)
        return <IPostResponse[]>posts
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error(`Error getting posts`, err.message);
        } else {
            console.error(`An unexpected error occurred`, err);
        }
        return <IPostResponse[]>[]
    }
}

export {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}