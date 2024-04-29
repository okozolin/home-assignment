import express from 'express';
import { getAllPosts, createPost, updatePost, deletePost } from '../post/postController';

const router = express.Router();

router.route('/')
    .get(getAllPosts)
    .post(createPost);

router.route('/:id')
    .put(updatePost)
    .delete(deletePost);

export default router;
