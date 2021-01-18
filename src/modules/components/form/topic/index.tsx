import {
  DialogTitle,
  TextField,
  DialogContent,
  Dialog,
  DialogProps,
} from "@material-ui/core";
import * as React from "react";
import Button from "../../button";
import "./styles.scss";

const topicForm: React.FC<DialogProps> = (props) => {
  return (
    <Dialog {...props}>
      <DialogTitle>Create New Topic</DialogTitle>
      <DialogContent>
        <form>
          <TextField id="topic-name" label="Name" required={true} />
          <TextField id="topic-summary" label="Summary" multiline={true} />
          <Button type="submit"> Submit </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default topicForm;
