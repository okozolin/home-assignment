import {
    SET_POSTS,
    ADD_POST,
    UPDATE_POST,
    DELETE_POST,
    LIKE_POST
} from './postsActions.ts';
import { PostsActions, PostsState } from "./postsInterface";

export const postsReducer = (state: PostsState, action: PostsActions) => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        case ADD_POST:
            return { ...state, posts: [action.payload, ...state.posts] };
        case UPDATE_POST:
            const filtered = state.posts.filter(post => post.id !== action.payload.id)
            return { ...state, posts: [action.payload, ...filtered] };
        case DELETE_POST:
            return { ...state, posts: state.posts.filter(post => post.id !== action.payload) };
        case LIKE_POST:
            const posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post )
            return { ...state, posts };
        default:
            return state;
    }
};