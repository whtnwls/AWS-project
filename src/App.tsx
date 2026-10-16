import { Routes, Route, Navigate } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { TrendDetailPage } from "./pages/TrendDetailPage";
import { QuizPage } from "./pages/QuizPage";

export default function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trend/:id" element={<TrendDetailPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
