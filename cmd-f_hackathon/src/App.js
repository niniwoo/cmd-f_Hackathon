import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Main from "./components/Main";
import Mypage from "./components/Mypage";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import PostingDetail from "./components/PostingDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/post-detail/:id" element={<PostingDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
