export interface IPostRequest {
    userId: number,
    date: string,
    content: string,
    imageUrl?: string
}
export interface IPostResponse extends IPostRequest {
    id: number
}