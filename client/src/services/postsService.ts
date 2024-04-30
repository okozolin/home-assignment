import apiClient from '../api/apiClient';
import { PostData } from '../types';

const fetchPosts = async () => {
    return await apiClient.get('/posts');
};

const createPost = async (post: PostData) => {
    return await apiClient.post('/posts', post);
};

const updatePost = async (postId: string, updatedPost: PostData) => {
    return await apiClient.put(`/posts/${postId}`, updatedPost);
};

const deletePost = async (postId: string) => {
    return await apiClient.delete(`/posts/${postId}`);
};

const likePost = async (postId: string, userId: string) => {
    return await apiClient.put(`/posts/like/${postId}`, {userId});
};

export { fetchPosts, createPost, updatePost, deletePost, likePost };
