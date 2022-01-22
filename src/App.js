import React from "react";

import CssBaseline from "@mui/material/CssBaseline";

import Landing from "./components/landing/Landing.js";
import ProjectCard from "./components/projectCard/ProjectCard.js";
import Contact from "./components/contact/Contact.js";

export default function App() {
    return (
        <>
            <CssBaseline />
            <Landing />

            <ProjectCard />
            <Contact />
        </>
    );
}
