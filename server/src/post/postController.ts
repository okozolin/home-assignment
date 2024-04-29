import * as PostService from "./postService";
import {Request, Response} from "express";

async function getAllPosts(req: Request, res: Response) {
    const db = "../../db/posts.json"
    const posts = await PostService.getAllPosts(db);
    res.status(200).json(posts);
}
async function getPost(req: Request, res: Response) {
    const db = "../../db/posts.json"
    const postId = parseInt(req.params.id);
    const posts = await PostService.getPost(db, postId);
    res.status(200).json(posts);
}
async function createPost(req: Request, res: Response) {
    const db = "../../db/posts.json"
    const post = req.body;
    const posts = await PostService.createPost(db, post);
    res.status(200).json(posts);
}
async function updatePost(req: Request, res: Response) {
    const db = "../../db/posts.json"
    const posts = await PostService.updatePost(db);
    res.status(200).json(posts);
}
async function deletePost(req: Request, res: Response) {
    const db = "../../db/posts.json"
    const posts = await PostService.deletePost(db);
    res.status(200).json(posts);
}

export {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}