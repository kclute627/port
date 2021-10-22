import React from "react";
import ReactDOM from "react-dom";
import "./sass/main.scss";
import Home from './components/home/Home'
import ProjectPage from "./components/projectPage/ProjectPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const routing = (
  <div className="app" style={{ position: "relative" }}>
    <Router>
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/:id" component={ProjectPage} />
      </div>
    </Router>{" "}
  </div>
);

ReactDOM.render(
  <React.StrictMode>{routing}</React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
