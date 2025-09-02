import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ChatPage from "./pages/ChatPage"; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
