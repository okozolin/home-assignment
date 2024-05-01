import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material";

interface DialogProps {
    openDialog: boolean,
    onCloseDialog: () => void,
    onConfirm: () => void,
}
export const ConfirmationDialog: React.FC<DialogProps> = ({openDialog, onCloseDialog, onConfirm }) => {
     return (
        <Dialog
            open={openDialog}
            onClose={onCloseDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Really ! "}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Sad to see you changed your mind, this action cannot be undone! Are you sure you want to delete this post?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCloseDialog} color="primary">
                    Cancel
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    )
}
export default ConfirmationDialog