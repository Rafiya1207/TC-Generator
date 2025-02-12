import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

function TCDataConfirmationPopUp({ isTCSubmitted, close, confirm }) {

  return (
    <div>
      <Button variant="contained" color="primary" onClick={close}>
        Submit TC
      </Button>

      {/* Confirmation Dialog */}
      <Dialog open={isTCSubmitted} onClose={close}>
        <DialogTitle>Confirm Submission</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to submit the TC data? <br />
            <strong>No edits will be possible after submission.</strong>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="secondary">
            Cancel
          </Button>
          <Button onClick={confirm} color="primary" variant="contained">
            Confirm & Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TCDataConfirmationPopUp;
