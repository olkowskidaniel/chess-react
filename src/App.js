import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page.jsx";
import Players from "./pages/players/players.page";

function App() {
    return (
        <div className="app-container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<Players />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
