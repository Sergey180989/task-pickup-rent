import { Route, Routes, Navigate } from "react-router-dom";
import { MainLayout } from "./components/MainLayout/MainLayout";
import { WelcomePage } from "./pages/WelcomePage";
import { Catalog } from "./pages/Catalog";
import { Favorites } from "./pages/Favorites";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
