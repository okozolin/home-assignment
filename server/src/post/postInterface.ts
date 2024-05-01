export interface ILike {
    count: number,
    userIds: number[]
}
export interface IPostRequest {
    userId: number,
    date: string,
    content: string,
    imageUrl?: string
    likes: ILike
}
export interface IPostResponse extends IPostRequest {
    id: number
}