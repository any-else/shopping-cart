import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import Auth from "./pages/auth/Auth";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Admin from "./pages/admin/Admin";
import Upload from "./components/upload/Upload";
import UploadImage from "./components/uploadImage/UploadImage";
import Audio from "./components/audio/Audio";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("user:", user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Route>
        <Route
          path="/admin"
          element={
            // <Protected users={user}>
            <Admin />
            // </Protected>
          }
        />
        <Route path="/upload" element={<Upload />} />
        <Route
          path="/uploadImage"
          element={
            <ProtectedHome isCheck={user}>
              <UploadImage />{" "}
            </ProtectedHome>
          }
        />
        <Route path="/audio" element={<Audio />} />
      </Routes>
    </div>
  );
}
//component bao ve admin
function Protected({ users, children }) {
  console.log("user protect", users);
  if (users.email == "admin@gmail.com") {
    return children;
  }
  return <Navigate to="/" replace />;
}
//bao upload
function ProtectedHome({ isCheck, children }) {
  if (isCheck) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default App;
