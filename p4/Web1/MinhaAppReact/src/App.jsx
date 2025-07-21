import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./assets/layout/Layout";
import Main from "./assets/components/Main";
import Home from "./assets/pages/CensoEscolar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
