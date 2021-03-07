import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Contacts from "./components/Contacts.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return(
        <div className="main_container">
            <Header />
            <Switch>
                <Route path="/portfolio" component={Home} exact />
                <Route path="/projects" component={Projects} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;