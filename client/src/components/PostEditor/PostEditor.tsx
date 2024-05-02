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
import { NewPostData } from "../../types.ts";
import useUsers from "../../hooks/useUsers.ts";

type PostEditorProps = {
    closeEditor: () => void;
};

export const PostEditor: React.FC<PostEditorProps> = ({ closeEditor }) => {
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const { addNewPost } = usePosts();
  const { activeUser } = useUsers()

  const onSubmit = async () => {
    if (!content) {
      alert('Content cannot be empty.');
      return;
    }

    const newPost: NewPostData = {
      userId: activeUser.id,
      content,
      date: new Date().toISOString(),
      imageUrl,
      likes: {
        count: 0,
        userIds: []
      }
    };

    const added = await addNewPost(newPost);
    if (added) {
      setContent('');
      setImageUrl('');
      alert('Post added successfully');
      closeEditor()
    }
  };

  const onCancel = () => {
    setContent('');
    setImageUrl('');
    closeEditor()
  };

    return (
        <Dialog open={true} onClose={closeEditor} fullWidth maxWidth="sm">
            <DialogTitle>Share your ideas, create new post</DialogTitle>
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
