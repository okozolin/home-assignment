import apiClient from '../api/apiClient';
import {NewPostData, PostData} from '../types';

const fetchPosts = async () => {
    return await apiClient.get('/posts');
};

const createPost = async (post: NewPostData) => {
    return await apiClient.post('/posts', post);
};

const updatePost = async (postId: string, updatedPost: PostData) => {
    return await apiClient.put(`/posts/${postId}`, updatedPost);
};

const deletePost = async (postId: string) => {
    return await apiClient.delete(`/posts/${postId}`);
};


export { fetchPosts, createPost, updatePost, deletePost };
