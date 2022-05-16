import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Box } from "@mui/material";

const NewTodo = React.lazy(() => import("./components/NewToDo/NewToDo"));
const Container = React.lazy(() => import("./container/Container"));

const App: React.FC = () => {
  return (
    <React.Suspense fallback="loading...">
      <Router>
        <div className="App">
          <Box sx={{ display: "flex" }}>
            <Container />
            <Routes>
              <Route path="/task" element={<NewTodo />}></Route>
            </Routes>
          </Box>
        </div>
      </Router>
    </React.Suspense>
  );
};

export default App;
