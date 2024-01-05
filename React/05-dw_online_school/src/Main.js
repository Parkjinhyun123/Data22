import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HomePage from "./pages/HomePage";
import QuestionListPage from "./pages/QuestionListPage";
import CourseListPage from "./pages/CourseListPage";
import CoursePage from "./pages/CouresPage";
import Login from "./components/Login";
import Logout from "./components/Logout";
import WishlistPage from "./pages/WishlistPage";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="courses">
            <Route index element={<CourseListPage />} />
            <Route path=":courseSlug" element={<CoursePage />} />
          </Route>
          <Route path="questions">
            <Route index element={<QuestionListPage />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="wishlist" element={<WishlistPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
