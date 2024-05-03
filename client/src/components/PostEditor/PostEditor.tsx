import { useState } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogActions,
    DialogTitle,
} from '@mui/material';
import "./styles.css";
import usePosts from "../../hooks/usePosts.ts";
import useUsers from "../../hooks/useUsers.ts";

type PostEditorProps = {
    closeEditor: () => void;
};

export const PostEditor: React.FC<PostEditorProps> = ({ closeEditor }) => {
    const { addNewPost, updateExistingPost, editorMode, setEditorMode } = usePosts();
    const { activeUser } = useUsers()

    const [content, setContent] = useState<string>(editorMode?.content || '');
    const [imageUrl, setImageUrl] = useState<string>(editorMode?.imageUrl ||'');


  const onSubmit = async () => {
    if (!content) {
      alert('Content cannot be empty.');
      return;
    }


    if (!editorMode) {
        const added = await addNewPost({
            userId: activeUser?.id ?? 0,
            content,
            date: new Date().toISOString(),
            imageUrl,
            likes: {
                count: 0,
                userIds: []
            }
        });
        if (added) {
            alert('Post added successfully');
        }
    }
    else {
        await updateExistingPost(editorMode.id,  {
            ...editorMode,
            content,
            date: new Date().toISOString(),
            imageUrl,
        });
        alert('Post updated successfully');
    }
    setContent('');
    setImageUrl('');
    setEditorMode(null)
    closeEditor()
  };

  const onCancel = () => {
    setContent('');
    setImageUrl('');
    closeEditor()
  };

    return (
        <Dialog open={true} onClose={closeEditor} fullWidth maxWidth="sm">
            <DialogTitle>Share your ideas, {editorMode ? "Update your post" : "create new post"}</DialogTitle>
            <DialogContent>
                <TextField
                    label="Content"
                    multiline
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    variant="outlined"
                    fullWidth
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={onSubmit}>
                    Submit
                </Button>
                <Button variant="outlined" color="secondary" onClick={onCancel}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};
