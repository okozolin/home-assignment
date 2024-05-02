import {createContext, useReducer, useState} from 'react';
import { postsReducer } from './postsReducer.ts';
import {
    SET_POSTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from "./postsActions.ts";
import {PostData} from "../../types.ts";

const initialState = {
    posts: [],
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, initialState, (init)=> init);
    const [editorMode, setEditorMode] = useState<PostData>(null as PostData)
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
    const likePost = post => {
        dispatch({ type: LIKE_POST, payload: post });
    };

    const value = {
        ...state,
        setPosts,
        addPost,
        updatePost,
        deletePost,
        likePost,
        editorMode,
        setEditorMode
    }
    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    );
};