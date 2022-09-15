// import Login from "./components/Login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useAuth0 } from '@auth0/auth0-react';


function App() {

  // const { isAuthenticated } = useAuth0();
  return (
    <BrowserRouter>
      <Header />
    
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
     <Footer />
    

    
</BrowserRouter>
  );
}

export default App;
