// login set
import Login from "./pages/Login/Login.jsx";
import Signup from "./pages/Login/Signup.jsx";
import Forgotpw from "./pages/Login/Forgotpw.jsx";
import Passwordchange from "./pages/Login/Passwordchange.jsx";

//editor set
import Editor from "./pages/Editor/Editor.jsx"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* login set */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpw" element={<Forgotpw />} />
        <Route path="/reset/:token" element={<Passwordchange />} />

        {/* editor set */}
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </div>
  );
}

export default App;