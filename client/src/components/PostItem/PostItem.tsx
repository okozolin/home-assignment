import {
    Card,
    CardContent
} from "@mui/material";
import {PostData} from "../../types.ts";
import PostHeader from "./PostHeader.tsx";
import "./styles.css";
export const PostItem: React.FC<{ post: PostData }> = ({ post }) => (
    <Card
        className="post-item"
        sx={{
            boxShadow: 'none'
        }}
    >
        <PostHeader post={post} />
        <CardContent>
            <p>{post.content}</p>
        </CardContent>
        {/*<PostFooter post={post} />*/}
    </Card>
);
