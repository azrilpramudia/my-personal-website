import AppRouter from "./router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <ToastContainer position="bottom-right" />
      <Footer />
    </>
  );
}

export default App;
