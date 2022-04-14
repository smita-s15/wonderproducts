import { Navbar } from "./components/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Index } from "./components/Home";
import { Contact } from "./ui/Pages/Contact";
import { Globals } from "./ui/Pages/Globals";
import { Footer } from "./components/Footer";
import { Categories } from "./ui/Pages/Categories";
import { Packaging } from "./ui/Pages/Packaging";
import { Client} from "./ui/Pages/Clients";
import { Location } from "./ui/Pages/Location";
import { Contract } from "./ui/Pages/Services/Contract";
import { AboutUs } from "./ui/Pages/About/AboutUs";
import { Private } from "./ui/Pages/Services/Private";
import { TurnProject } from "./ui/Pages/Services/TurnProject";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<Index />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Packaging" element={<Packaging />} />
          <Route path="/Client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/Globals" element={<Globals />} />
          <Route path="/Contract" element={<Contract />} />
          <Route path="/Private" element={<Private />} />
          <Route path="/TurnProject" element={<TurnProject />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
