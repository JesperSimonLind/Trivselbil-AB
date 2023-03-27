import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vara-tjanster" element={<Services />}></Route>
          <Route path="/om-oss" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
