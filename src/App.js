import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return(
        <div className="main_container">
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/projects" component={Projects} />
            </Switch>
            <Footer />
        </div>
    );
};

export default App;