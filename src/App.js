import { Navbar } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./components/Home";
import { Contact } from "./ui/Pages/Contact";
import { Globals } from "./ui/Pages/Globals";
import { Footer } from "./components/Footer";
import { Categories } from "./ui/Pages/Categories";
import { Packaging } from "./ui/Pages/Packaging";
import { Client} from "./ui/Pages/Clients";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Globals" element={<Globals />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Packaging" element={<Packaging />} />
          <Route path="/Client" element={<Client />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
