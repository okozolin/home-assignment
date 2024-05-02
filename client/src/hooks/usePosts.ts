import { useContext } from 'react';
import { PostsContext } from '../context/posts/PostsContext';
import * as postsService from '../services/postsService';
import {NewPostData, PostData} from "../types.ts";

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

    const addNewPost = async (post: NewPostData) => {
        try {
            const newPost = await postsService.createPost(post);
            addPost(newPost);
            return true
        } catch (err) {
            console.error('Failed to create new post:', err);
        }
    };

    const updateExistingPost = async (postId: number, updatedPost: PostData) => {
        const updated = await postsService.updatePost(postId.toString(), updatedPost);
        updatePost(updated);
    };

    const removePost = async (postId: number) => {
        await postsService.deletePost(postId.toString());
        deletePost(postId);
    };

    const toggleLikePost = async (post: PostData, activeUserId: number) => {
        const updatedPost: PostData = {...post}
        updatedPost.likes = post?.likes || { count: 0, userIds: [] };
        const hasLiked = updatedPost?.likes?.userIds.includes(activeUserId);
        updatedPost.likes = {
            count: hasLiked ? updatedPost.likes.count - 1 : updatedPost.likes.count + 1,
            userIds: hasLiked
                ? updatedPost.likes.userIds.filter((id) => id !== activeUserId)
                : [...updatedPost.likes.userIds, activeUserId]
        }
        const updated = await postsService.updatePost(post.id.toString(), updatedPost);
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
