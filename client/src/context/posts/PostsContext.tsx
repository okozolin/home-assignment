import {createContext, ReactNode, useReducer, useState} from 'react';
import { postsReducer } from './postsReducer.ts';
import {
    SET_POSTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from "./postsActions.ts";
import {PostData} from "../../types.ts";

// interface State {
//     posts: PostData[]
// }

const initialState = {
    posts: [],
};

interface PostsContextValue {
    setPosts: (postsData : PostData[]) => void,
    addPost:  (post : PostData) => void,
    updatePost: (post : PostData) => void,
    deletePost: (postId: number) => void,
    likePost: (post : PostData) => void,
    editorMode: PostData,
    setEditorMode: (post: PostData | null) => void
    posts: PostData[]
}
export const PostsContext = createContext<PostsContextValue>(initialState)

interface PostsProviderProps {
    children: ReactNode;
}

export const PostsProvider:React.FC<PostsProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(postsReducer, initialState, (init)=> init);
    const [editorMode, setEditorMode] = useState<PostData>(null as PostData)
    // Actions
    const setPosts = (postsData : PostData[]) => {
        dispatch({ type: SET_POSTS, payload: postsData });
    };
    const addPost = (post : PostData) => {
        dispatch({ type: ADD_POST, payload: post });
    };
    const updatePost = (post : PostData) => {
        dispatch({ type: UPDATE_POST, payload: post });
    };
    const deletePost = (postId : number) => {
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