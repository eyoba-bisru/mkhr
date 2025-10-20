import { StrictMode, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
const LoginPage = lazy(() => import("./pages/login-page.tsx"));
const NotFound = lazy(() => import("./pages/not-found.tsx"));
const DashboardLayout = lazy(() => import("./pages/dashboard-layout.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="auth">
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
          <Route path="/hr">
            <Route path="settings" element={<div>HR Settings Page</div>} />
            <Route
              path="administration"
              element={<div>HR Administration Page</div>}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
