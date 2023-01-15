import "./App.css";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import ChatPage from "./components/ChatPage/ChatPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatpage" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
