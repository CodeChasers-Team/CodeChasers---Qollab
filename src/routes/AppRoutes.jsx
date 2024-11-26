import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login/Login";
import RegisterPage from "../pages/register/Register";
import HomePage from "../pages/home/Home";
import NotFoundPage from "../pages/notfound/NotFound";
import QuizPage from "../pages/quizPage/QuizPage";
import CreateQuestion from "../components/CreateQuestion";

const AppRoutes = () => {
  return (
    <BrowserRouter
      futture={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/create/quiz" element={<CreateQuestion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
