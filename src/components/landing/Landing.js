import React from "react";
import { Typography, Paper, Container, Box, Button } from "@mui/material";

import LandingStyle from "./style/LandingStyle.js";

export default function Landing() {
    return (
        <Container maxWidth="false" disableGutters>
            <Paper style={LandingStyle.backgroundImage} square>
                <Box display="flex" justifyContent="center" pt="3%">
                    <Typography
                        style={LandingStyle.typography}
                        fontSize={100}
                        variant="h3"
                        component="h3"
                        color="#ffffff">
                        Hi.
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" pt="5%">
                    <Typography
                        style={LandingStyle.typography}
                        fontSize={100}
                        variant="h3"
                        component="h3"
                        color="#ffffff">
                        Welcome to my website.
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" pt="5%">
                    <Typography
                        style={LandingStyle.typography}
                        fontSize={40}
                        variant="h6"
                        component="h3"
                        color="#ffffff">
                        My name is Alex Pfeifer.
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" pt="0%">
                    <Typography
                        style={LandingStyle.typography}
                        fontSize={40}
                        variant="h6"
                        component="h3"
                        color="#ffffff">
                        I'm a web developer from Victoria, BC, Canada
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" pt="5%">
                    <Box mr="12%">
                        <Button style={LandingStyle.button} variant="contained">
                            See my work
                        </Button>
                    </Box>
                    <Box>
                        <Button style={LandingStyle.button} variant="contained">
                            Contact me
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
}
