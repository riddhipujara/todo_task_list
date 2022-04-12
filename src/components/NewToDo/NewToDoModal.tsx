import * as React from "react";
import {
  Box,
  TextField,
  Typography,
  Modal,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid ",
  boxShadow: 35,
  p: 4,
};

interface iModalData {
  modalOpen: boolean;
  todoModalHandler: () => void;
  todoInputChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  todoInputSelectHandler: (event: SelectChangeEvent) => void;
  todoAddHandler: () => void;
  todoData: {
    name: string;
    desc: string;
    status: string;
    priority: string;
    id: string;
  };
}
const NewToDoModal: React.FC<iModalData> = (props) => {
  const {
    modalOpen,
    todoModalHandler,
    todoInputChangeHandler,
    todoAddHandler,
    todoData,
    todoInputSelectHandler,
  } = props;
  const { name, desc, status, priority, id } = todoData;
  return (
    <div>
      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{
              mb: 2,
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Create Task
          </Typography>
          <hr style={{ backgroundColor: "purple" }}></hr>
          <TextField
            id="standard-basic"
            label="Task Name"
            variant="standard"
            fullWidth={true}
            size="medium"
            onChange={todoInputChangeHandler}
            value={name}
            name="name"
          />
          <TextField
            id="outlined-textarea"
            label="Task Description"
            multiline
            fullWidth={true}
            onChange={todoInputChangeHandler}
            variant="standard"
            value={desc}
            name="desc"
          />
          <FormControl sx={{ mt: 2 }}>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Status
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="status"
              onChange={todoInputChangeHandler}
              value={status}
            >
              <FormControlLabel value="Open" control={<Radio />} label="Open" />
              <FormControlLabel
                value="In Progress"
                disabled={id ? false : true}
                control={<Radio />}
                label="In Progress"
              />
              <FormControlLabel
                value="Closed"
                disabled={id ? false : true}
                control={<Radio />}
                label="Closed"
              />
            </RadioGroup>
          </FormControl>
          <FormControl variant="standard" sx={{ minWidth: 400 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Priority
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={priority}
              onChange={todoInputSelectHandler}
              label="Priority"
              name="priority"
            >
              <MenuItem value="" sx={{ minWidth: 400 }}>
                <em>None</em>
              </MenuItem>
              <MenuItem value="Blocker" sx={{ minWidth: 400 }}>
                Blocker
              </MenuItem>
              <MenuItem value="Critical" sx={{ minWidth: 400 }}>
                Critical
              </MenuItem>
              <MenuItem value="Minor" sx={{ minWidth: 400 }}>
                Minor
              </MenuItem>
              <MenuItem value="Trivial" sx={{ minWidth: 400 }}>
                Trivial
              </MenuItem>
              <MenuItem value="Cosmetic" sx={{ minWidth: 400 }}>
                Cosmetic
              </MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={todoModalHandler}
            color="error"
            variant="outlined"
            size="small"
            fullWidth={true}
            sx={{ mt: 2 }}
          >
            close
          </Button>
          <Button
            onClick={() => todoAddHandler()}
            size="small"
            fullWidth={true}
            sx={{ mt: 2 }}
            color="secondary"
            variant="outlined"
          >
            {id ? `UPDATE TODO` : `ADD TODO`}
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NewToDoModal;
