import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route path="course">
            <Route path=""></Route>
          </Route>
          <Route path="question">
            <Route path=":questionId"></Route>
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
