import Sidebar from "./components/Fragments/Sidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
