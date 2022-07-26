import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SingInModal";
import Private from "./pages/private/Private";
import PrivateHome from "./pages/private/private-home/PrivateHome";

const App = () => {
  return (
    <>
      <Navbar />
      <SignUpModal />
      <SignInModal />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<Private />}>
          <Route path="/private/private-home" element={<PrivateHome />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
