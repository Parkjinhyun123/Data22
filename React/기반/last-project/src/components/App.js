import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import SingUp from "./Account/SignUp";
import Map from "./map/Map";
import CursorTest from "./CursorTest";
import Terms from "./Account/Terms";

function App() {
  return (
    <>
      <SingUp></SingUp>
      {/* <Map></Map> */}
      {/* <CursorTest></CursorTest> */}
      {/* <Terms></Terms> */}
    </>
  );
}

export default App;
