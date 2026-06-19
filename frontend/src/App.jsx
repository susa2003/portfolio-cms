import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/admin"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<Dashboard />}
        />
        <Route
  path="/project/:id"
  element={<ProjectDetails />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
