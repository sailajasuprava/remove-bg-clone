import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/AppLayout";
import UploadImage from "./pages/UploadImage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
