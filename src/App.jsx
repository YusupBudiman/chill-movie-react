import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Film from "./pages/Film";
import MyList from "./pages/MyList";
import MyProfile from "./pages/MyProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Nested route di bawah /home */}
        <Route path="/home" element={<Home />}>
          <Route path="series" element={<Series />} />
          <Route path="film" element={<Film />} />
          <Route path="mylist" element={<MyList />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
