export interface Like {
  count: number,
  userIds: number[]
}
export interface PostData {
  id: number,
  userId: number,
  content: string,
  date: string,
  imageUrl?: string,
  likes: Like
}

export interface UserData {
  id: number,
  name: string,
  avatar?: string
}
