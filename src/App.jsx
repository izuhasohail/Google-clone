
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SearchPage from "./pages/searchPage/SearchPage";
function App() {
  

  return (
    
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<SearchPage/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      
    
      </Router>
    </div>
    
  )
}

export default App;
