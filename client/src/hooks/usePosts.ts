import { useContext } from 'react';
import { PostsContext } from '../context/posts/PostsContext';
import * as postsService from '../services/postsService';

const usePosts = () => {
    const { posts, setPosts, addPost, updatePost, deletePost, likePost } = useContext(PostsContext);

    const loadPosts = async () => {
        try {
            const postsData = await postsService.fetchPosts();
            setPosts(postsData);
        } catch (err) {
            console.error('Failed to load posts:', err);
        }

    };

    const addNewPost = async (post) => {
        const newPost = await postsService.createPost(post);
        addPost(newPost);
    };

    const updateExistingPost = async (postId, updatedPost) => {
        const updated = await postsService.updatePost(postId, updatedPost);
        updatePost(updated);
    };

    const removePost = async (postId) => {
        await postsService.deletePost(postId);
        deletePost(postId);
    };

    const toggleLikePost = async (postId) => {
        const updated = await postsService.likePost(postId);
        likePost(updated);
    };

    return {
        posts,
        loadPosts,
        addNewPost,
        updateExistingPost,
        removePost,
        toggleLikePost,
    };
};

export default usePosts;
