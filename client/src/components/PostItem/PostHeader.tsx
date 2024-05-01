import { CardHeader } from '@mui/material';
import { UserAvatar } from '../UserAvatar'
import { PostData } from '../../types';
import useUsers from "../../hooks/useUsers.ts";
import {formatDate} from "../../utils/utils.ts";


const PostHeader: React.FC<{ post: PostData }> = ({ post }) => {
    const { user } = useUsers(post.userId)
    return (
        user && (
        <CardHeader
            avatar={<UserAvatar user={user}/>}
            title={user.name}
            subheader={formatDate(post.date)}
        />
    ))
}
export default PostHeader