import React from "react";
import NewTodo from "./components/NewToDo/NewToDo";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Link to="/home">Home</Link>
      <hr />
      <div className="App">
        <Routes>
          <Route path="/home" element={<NewTodo />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
