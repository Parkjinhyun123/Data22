import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.font.css";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
