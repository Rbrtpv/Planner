import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="editor" element={<Editor />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
