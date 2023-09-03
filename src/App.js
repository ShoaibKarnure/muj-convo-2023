import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";
import Protected from "./components/Protected";
import FeedBackForm from "./pages/Feedback";
// import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <Protected>
              <Dash />
            </Protected>
          }
        />
        {/* <Route path='/feedback' element={<FeedBackForm />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
