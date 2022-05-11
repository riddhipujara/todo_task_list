import React from "react";
import NewTodo from "./components/NewToDo/NewToDo";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Container from "./container/Container";
import { Box } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Box sx={{ display: "flex" }}>
            <Container />
            <Routes>
              <Route path="/taskForm" element={<NewTodo />}></Route>
            </Routes>
          </Box>
        </div>
      </Router>
    </>
  );
};

export default App;
