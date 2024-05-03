import {PostData, UserData} from "../../types";
import {
    ADD_POST,
    DELETE_POST,
    SET_POSTS,
    UPDATE_POST
} from "./postsActions";

interface SetPostsAction {
    type: typeof SET_POSTS;
    payload: PostData[]
}

interface AddPostAction {
    type: typeof ADD_POST;
    payload: PostData
}

interface UpdatePostAction {
    type: typeof UPDATE_POST;
    payload: PostData
}

interface DeletePostAction {
    type: typeof DELETE_POST;
    payload: number
}

interface LiekePostAction {
    type: typeof DELETE_POST;
    payload: PostData
}

export type PostsActions =     SetPostsAction |
    AddPostAction |
    UpdatePostAction |
    DeletePostAction |
    LiekePostAction

export interface PostsState {
   posts: PostData[]
}