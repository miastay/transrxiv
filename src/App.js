import * as React from "react";
import { Router, Route, Routes, Outlet, Link } from "react-router-dom";
import Home from './pages/home';

import './styles/root.scss';


function App() {
  return (
    <Home />
  );
}

export default App;
