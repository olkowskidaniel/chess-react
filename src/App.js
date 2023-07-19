import "./App.scss";
import Header from "./components/header/header.component";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page.jsx";
import Clubs from "./pages/clubs/clubs.page.jsx";
function App() {
    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/clubs" element={<Clubs />} />
            </Routes>
        </div>
    );
}

export default App;
