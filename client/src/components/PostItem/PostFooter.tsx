import {Box, CardActions, IconButton, Badge} from "@mui/material";
import {
    Delete,
    Edit,
    ThumbUp
} from "@mui/icons-material";
import usePosts from "../../hooks/usePosts.ts";
import {PostData} from "../../types.ts";
import useUsers from "../../hooks/useUsers.ts";
import {useState} from "react";
import {ConfirmationDialog} from "../ConfirmationDialog";
import ConditionalTooltip from "../ConditionalTooltip/ConditionalTooltip.tsx";

interface PostFooterProps {
    post: PostData,
    openEditor: () => void
}
const PostFooter: React.FC<PostFooterProps> = ({ post, openEditor }) => {
    const {
        removePost,
        toggleLikePost,
        } = usePosts();
    const { activeUser, getUserNamesByIds } = useUsers()
    const [openDialog, setOpenDialog] = useState(false);
    const { setEditorMode } = usePosts()

    const onConfirmDelete = () => {
        setOpenDialog(false);
        removePost(post.id);
    };

    const onCloseDialog = () => {
        setOpenDialog(false);
    };

    const onDelete = () => {
        setOpenDialog(true)
    }
    const onEdit = () => {
        setEditorMode(post)
        openEditor()
    }
    const onLike = () => {
        toggleLikePost(post, activeUser.id)
    }

    return (
        <>
        <CardActions disableSpacing sx={{ justifyContent: 'space-between' }}>
            <Box>
            { activeUser?.id === post?.userId &&
                <>
                    <IconButton onClick={onEdit}>
                        <Edit/>
                    </IconButton>
                    <IconButton onClick={onDelete}>
                        <Delete/>
                    </IconButton>
                </>
            }
            </Box>
            <Box>
                 <ConditionalTooltip
                    title={
                     post.likes.userIds.length ? (
                         <div style={{ whiteSpace: 'pre-line' }}>
                             {getUserNamesByIds(post.likes.userIds).join('\n')}
                         </div>)
                            : null
                    }
                    placement="top"
                    arrow
                >
                    <IconButton onClick={onLike}>
                    <Badge
                        badgeContent={post?.likes?.count}
                        color="primary"
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        sx={{
                            marginRight: '4px',
                            '.MuiBadge-badge': {
                                top: -4,
                                right: -4,
                            },
                        }}
                    >
                        <ThumbUp color={'primary'}/>
                    </Badge>
                </IconButton>
                </ConditionalTooltip>
            </Box>
        </CardActions>
        <ConfirmationDialog
            openDialog={openDialog}
            onCloseDialog={onCloseDialog}
            onConfirm={onConfirmDelete}
        />
    </>
    )
};
export default PostFooter