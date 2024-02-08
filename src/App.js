import "./App.css";

import React, { Component } from "react";
// import Navbar from "./components/navbar";
import Navbar from "./components/navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<News key="business" category="business" />}
        />
        <Route
          exact
          path="/business"
          element={<News key="business" category="business" />}
        />
        <Route
          path="/general"
          element={<News key="general" category="general" />}
        />
        <Route
          exact
          path="/health"
          element={<News key="health" category="health" />}
        />
        <Route
          exact
          path="/entertainment"
          element={<News key="entertainment" category="entertainment" />}
        />
        <Route
          exact
          path="/science"
          element={<News key="science" category="science" />}
        />
        <Route
          exact
          path="/sports"
          element={<News key="sports" category="sports" />}
        />
        <Route
          exact
          path="/technology"
          element={<News key="technology" category="technology" />}
        />
      </Routes>
      {/* <News category="business" /> */}
    </Router>
  );
};
export default App;
