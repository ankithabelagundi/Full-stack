import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import SendMoney from "./pages/SendMoney"
import Statement from "./pages/Statement"

import PrivateRoute from "./components/PrivateRoute";
import AuthProvider  from "./context/AuthContext";
 function App(){
  return(
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        <Route path="/send" element={<PrivateRoute><SendMoney/></PrivateRoute>}/>
<Route path="/statement" element={<PrivateRoute><Statement/></PrivateRoute>}/>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
 } 
 export default App;