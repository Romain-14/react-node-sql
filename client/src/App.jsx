import { BrowserRouter, Routes, Route } from "react-router-dom";

import HOC from "./Components/HOC/Index";
import Header from "./Components/Containers/Header/Index";
import Home from "./Components/Pages/Home/Index";
import Tea from "./Components/Pages/Tea/Index";
import About from "./Components/Pages/About/Index";
import Signin from "./Components/Pages/user/Signin";
import Dashboard from "./Components/Pages/user/Dashboard";
import Signup from "./Components/Pages/user/Signup";
import Signout from "./Components/Pages/user/Signout";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HOC child={Home} />} />
                <Route path="the" element={<HOC child={Tea} />} />
                <Route path="notre-histoire" element={<About />} />
                <Route path="/utilisateur">
                    <Route path="connexion" element={<Signin />} />
                    <Route path="dashboard" element={<HOC child={Dashboard} auth={true}/>} />
                    <Route path="creer-un-compte" element={<Signup />} />
                    <Route path="deconnexion" element={<Signout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
