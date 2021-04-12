import React from "react";

import SingleProject from "./SingleProject.jsx";

function Projects() {
    return(
        <div className="projectsPage">
            <h1>PROJECTS</h1>
            <div className="projects">
                <SingleProject
                    name="Metronome"
                    image="metronome"
                    conn="https://fabiolorenzi.github.io/metronome"
                    code="https://github.com/fabiolorenzi/metronome"
                />
                <SingleProject
                    name="Quicky Pizza"
                    image="quicky_pizza"
                    conn="https://fabiolorenzi.github.io/quicky-pizza"
                    code="https://github.com/fabiolorenzi/quicky-pizza"
                />
                <SingleProject
                    name="Fabian Larries"
                    image="fabianLarries"
                    conn="https://fabiolorenzi.github.io/fabianlarries"
                    code="https://github.com/fabiolorenzi/fabianlarries"
                />
                <SingleProject
                    name="Calculator"
                    image="calculator"
                    conn="https://fabiolorenzi.github.io/calculator"
                    code="https://github.com/fabiolorenzi/calculator"
                />
                <SingleProject
                    name="Weather"
                    image="weather"
                    conn="https://fabiolorenzi.github.io/weather"
                    code="https://github.com/fabiolorenzi/weather"
                />
                <SingleProject
                    name="Eye"
                    image="eye"
                    conn="https://fabiolorenzi.github.io/eye"
                    code="https://github.com/fabiolorenzi/eye"
                />
                <SingleProject
                    name="Todo"
                    image="todo"
                    conn="https://fabiolorenzi.github.io/todo"
                    code="https://github.com/fabiolorenzi/todo"
                />
                <SingleProject
                    name="Technical Challenge"
                    image="technicalChallenge"
                    conn="https://fabiolorenzi.github.io/technical_challenge/"
                    code="https://github.com/fabiolorenzi/technical_challenge"
                />
                <SingleProject
                    name="Kantenya"
                    image="kantenya"
                    conn="https://fabiolorenzi.github.io/kantenya"
                    code="https://github.com/fabiolorenzi/kantenya"
                />
            </div>
        </div>
    );
};

export default Projects;