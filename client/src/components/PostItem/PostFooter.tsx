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

const PostFooter: React.FC<{ post: PostData }> = ({ post }) => {
    const {
        addNewPost,
        updateExistingPost,
        removePost,
        toggleLikePost } = usePosts();
    const { activeUser } = useUsers()
    const [openDialog, setOpenDialog] = useState(false);

    const onConfirmDelete = () => {
        setOpenDialog(false);
        removePost(post.id);
    };

    const onCloseDialog = () => {
        setOpenDialog(false);
    };

    const onDelete = () => {
        console.log("clicked delete for active user", activeUser.name)
        setOpenDialog(true)
    }
    const onEdit = () => {
        console.log("clicked edit for active user", activeUser.name)
    }
    const onLike = () => {
        console.log("clicked Like for active user", activeUser.name)
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
                <IconButton onClick={onLike}>
                    <Badge
                        badgeContent={post.likes}
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