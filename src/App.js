import { Navbar } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./components/Home";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
