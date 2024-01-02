import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import QuestionListPage from "./pages/QuestionListPage";
import CourseListPage from "./pages/CourseListPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            {/* <Route path="" element={<CourseListPage />} /> */}
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
