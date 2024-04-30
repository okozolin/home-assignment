import { createContext, useReducer } from 'react';
import { postsReducer } from './postsReducer.ts';
import {
    SET_POSTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from "./postsActions.ts";

const initialState = {
    posts: [],
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, initialState, (init)=> init);

    // Actions
    const setPosts = postsData => {
        dispatch({ type: SET_POSTS, payload: postsData });
    };
    const addPost = post => {
        dispatch({ type: ADD_POST, payload: post });
    };
    const updatePost = post => {
        dispatch({ type: UPDATE_POST, payload: post });
    };
    const deletePost = postId => {
        dispatch({ type: DELETE_POST, payload: postId });
    };
    const likePost = like => {
        dispatch({ type: LIKE_POST, payload: like });
    };

    return (
        <PostsContext.Provider value={{ ...state, setPosts, addPost, updatePost, deletePost, likePost }}>
            {children}
        </PostsContext.Provider>
    );
};