import * as PostService from "./postService";
import {Request, Response} from "express";

async function getAllPosts(req: Request, res: Response) {
    const posts = await PostService.getAllPosts();
    res.status(200).json(posts);
}
async function createPost(req: Request, res: Response) {
    const post = req.body;
    const newPost = await PostService.createPost(post);
    res.status(200).json(newPost);
}
async function updatePost(req: Request, res: Response) {
    const post = req.body;
    const updatedPost = await PostService.updatePost(post);
    res.status(200).json(updatedPost);
}
async function deletePost(req: Request, res: Response) {
    const postId = req.params.id;
    const response = await PostService.deletePost(Number(postId));
    if (response)
        res.status(200).json(postId);
    else
        res.status(500).json(postId);
}

export {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}