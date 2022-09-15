import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { useAuth0 } from '@auth0/auth0-react';
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {isAuthenticated ? <>
       <Logout /> 
      <Profile /> 
      </>
      : 
      <Login />}
    
    </div>
  );
}

export default App;
