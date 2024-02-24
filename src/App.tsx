import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black bg-dot-white/[0.2] bg-fixed">
      <Navbar/>
      <Outlet/>
    </div>
  );
}
export default App
