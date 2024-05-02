export interface Like {
  count: number,
  userIds: number[]
}

export interface NewPostData {
  userId: number,
  content: string,
  date: string,
  imageUrl?: string,
  likes: Like
}
export interface PostData extends NewPostData{
  id: number,
}

export interface UserData {
  id: number,
  name: string,
  avatar?: string
}
