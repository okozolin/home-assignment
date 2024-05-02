import {
    Card,
    CardContent,
    CardMedia
} from "@mui/material";
import {PostData} from "../../types.ts";
import PostHeader from "./PostHeader.tsx";
import "./styles.css";
import PostFooter from "./PostFooter.tsx";

interface PostItemProps {
    post: PostData,
    openEditor: () => void
}
export const PostItem: React.FC<PostItemProps> = ({ post , openEditor}) => {

    return (
        <Card
            className="post-item"
            sx={{
                boxShadow: 'none'
            }}
        >
            <PostHeader post={post} />

            {post.imageUrl && (
                <CardMedia
                    sx={{
                        height: 400,
                        width: '100%',
                        objectFit: 'contain',
                    }}
                    component="img"
                    image={post.imageUrl}
                    alt="Post image"
                />
            )}

            <CardContent>
                <p>{post.content}</p>
            </CardContent>
            <PostFooter post={post} openEditor={openEditor}/>
        </Card>
    );
}
