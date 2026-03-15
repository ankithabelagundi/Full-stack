import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login"
import Login from "./pages/Dashboard"
import Login from "./pages/Signup"
import Login from "./pages/SendMoney"
import Login from "./pages/Statement"

import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
 function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/send" element={<PrivateRoute><SendMoney/></PrivateRoute>}/>
<Route path="/statement" element={<PrivateRoute><Statement/></PrivateRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
 } 
 export default App;