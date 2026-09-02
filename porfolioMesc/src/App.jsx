import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Obras from "./pages/Obras";

function App() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/obras" element={<Obras />} />
      </Routes>

  );
}

export default App;