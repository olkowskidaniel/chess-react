import "./App.scss";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page.jsx";
import Players from "./pages/players/players.page";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="app-con tainer">
            <QueryClientProvider client={queryClient}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/players" element={<Players />} />
                </Routes>
                <Footer />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </div>
    );
}

export default App;
