import * as PostService from "./postService";
import {Request, Response} from "express";

async function getAllPosts(req: Request, res: Response) {
    const posts = await PostService.getAllPosts();
    res.status(200).json(posts);
}
async function createPost(req: Request, res: Response) {
    const post = req.body;
    const posts = await PostService.createPost(post);
    res.status(200).json(posts);
}
async function updatePost(req: Request, res: Response) {
    const post = req.body;
    const posts = await PostService.updatePost(post);
    res.status(200).json(posts);
}
async function deletePost(req: Request, res: Response) {
    const post = req.body;
    const posts = await PostService.deletePost(post.id);
    res.status(200).json(posts);
}

export {
    getAllPosts,
    createPost,
    updatePost,
    deletePost
}