import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Index";
import Tea from "./Components/Pages/Tea/Index";
import About from "./Components/Pages/About";
import EntryUser from "./Components/Pages/EntryUser";
import Header from "./Components/Containers/Header/Index";

function App() {
    

    return (
        <BrowserRouter>

            <Header />

            <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="the" element={<Tea />}/>
                <Route path="notre-histoire" element={<About />}/>
                <Route path="connexion" element={<EntryUser />}/>

            </Routes>
        
        </BrowserRouter>
    );
}

export default App;
