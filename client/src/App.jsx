import { BrowserRouter, Routes, Route } from "react-router-dom";

import HOC from "./Components/HOC/Index";
import Header from "./Components/Containers/Header/Index";
import Home from "./Components/Pages/Home/Index";
import Tea from "./Components/Pages/Tea/Index";
import Detail from "./Components/Pages/Tea/Detail";
import About from "./Components/Pages/About/Index";
import Signin from "./Components/Pages/user/Signin";
import Dashboard from "./Components/Pages/user/Dashboard";
import Signup from "./Components/Pages/user/Signup";
import Signout from "./Components/Pages/user/Signout";
import Footer from "./Components/Containers/Footer/Index";

import NotFound from "./Components/Pages/NotFound/Index";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<HOC child={Home} />} />
                <Route path="/the">
                    <Route path="" element={<HOC child={Tea} index/>}/>
                    <Route path=":url_tea/:id" element={<HOC child={Detail} />}/>
                </Route> 
                <Route path="notre-histoire" element={<About />} />
                <Route path="/utilisateur">
                    <Route path="connexion" element={<Signin />} />
                    <Route path="votre-compte" element={<HOC child={Dashboard} auth={true}/>} />
                    <Route path="creer-un-compte" element={<Signup />} />
                    <Route path="deconnexion" element={<Signout />} />
                </Route>

                <Route path="/not-found" element={<NotFound/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
