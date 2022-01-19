import React from "react";
import { Typography, Paper } from "@mui/material";

import LandingStyle from "./style/LandingStyle.js";

export default function Landing() {
    return (
        <Paper style={LandingStyle.backgroundImage}>
            <Typography variant="h3" component="h3" color="white">
                Hi. Welcome to my website.
            </Typography>
            <Typography variant="subtitle1" component="h5" color="white">
                My name is Alex Pfeifer. I'm a web developer from Victoria BC,
                Canada
            </Typography>
            <Typography variant="h5" component="h5" color="white">
                Take a look at some of my past work below:
            </Typography>
        </Paper>
    );
}
