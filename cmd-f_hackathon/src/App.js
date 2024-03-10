import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Posting from "./pages/Posting";
import Posting2 from "./pages/Posting2";
import PostingDetail from "./pages/PostingDetail";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/posting" element={<Posting />} />
          <Route path="/posting2" element={<Posting2 />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/post-detail/:id" element={<PostingDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
