import {
    Card,
    CardContent,
    CardMedia
} from "@mui/material";
import {PostData} from "../../types.ts";
import PostHeader from "./PostHeader.tsx";
import "./styles.css";
import PostFooter from "./PostFooter.tsx";
export const PostItem: React.FC<{ post: PostData }> = ({ post }) => (
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
                // height="140"
                image={post.imageUrl}
                alt="Post image"
            />
        )}

        <CardContent>
            <p>{post.content}</p>
        </CardContent>
        <PostFooter post={post} />
    </Card>
);
