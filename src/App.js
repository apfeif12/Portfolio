import * as React from "react";
import { Typography, Paper, Grid } from "@mui/material";

import ProjectCard from "./components/projectCard/projectCard.js";

import backgroundPaper from "./assets/styles/backgroundPaper.js";

function App() {
    return (
        <>
            <Paper style={backgroundPaper.backgroundImage}>
                <Typography variant="h3" component="h3" color="white">
                    Hi. Welcome to my website.
                </Typography>
                <Typography variant="subtitle1" component="h5" color="white">
                    My name is Alex Pfeifer. I'm a web developer from Victoria
                    BC, Canada
                </Typography>
                <Typography variant="h5" component="h5" color="white">
                    Take a look at some of my past work below:
                </Typography>
            </Paper>
            <Grid >
                <ProjectCard />
            </Grid>
        </>
    );
}

export default App;
