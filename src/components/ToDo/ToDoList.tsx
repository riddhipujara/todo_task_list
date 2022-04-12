import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
  TableCell,
  Button,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import orderby from "lodash.orderby";

interface iTodoList {
  todos: {
    id: string;
    name: string;
    desc: string;
    status: string;
    priority: string;
  }[];
  todoDeleteHandler: (id: string) => void;
  todoEditHandler: (id: string) => void;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#50005a",
    color: theme.palette.common.white,
    textTransform: "uppercase",
    fontSize: 14,
    lineHeight: "0.5rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TodoList: React.FC<iTodoList> = (props) => {
  const { todos, todoDeleteHandler, todoEditHandler } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Task Name</StyledTableCell>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Priority</StyledTableCell>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderby(todos, ["name"], ["asc"]).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.desc}
              </StyledTableCell>
              <StyledTableCell>{row.status}</StyledTableCell>
              <StyledTableCell>{row.priority}</StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => todoDeleteHandler(row.id)}
                  size="small"
                  startIcon={<DeleteIcon />}
                  color="secondary"
                  variant="outlined"
                >
                  DELETE
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                {" "}
                <Button
                  onClick={() => todoEditHandler(row.id)}
                  size="small"
                  startIcon={<EditIcon />}
                  color="secondary"
                  variant="outlined"
                >
                  EDIT
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodoList;
