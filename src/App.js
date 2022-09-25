import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Details from "./components/Details";
import Results from "./components/Results";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="results/:id" element={<Results />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
