import React from "react";
import { Typography, Box, Paper } from "@mui/material";

import ContactStyle from "./style/ContactStyle.js";

export default function Contact() {
    return (
        <Box display="flex" justifyContent="center" pt={12}>
            <Paper
                elevation={6}
                sx={{
                    width: "80%",
                }}>
                <Box display="flex" justifyContent="center" pt={1}>
                    <Typography
                        style={ContactStyle.typography}
                        fontSize={40}
                        variant="h3"
                        component="h3">
                        Contact Me
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" pt="%">
                    <Box mr="38%">
                        <Typography
                            style={ContactStyle.typography}
                            fontSize={40}
                            variant="h3"
                            component="h3">
                            name
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            style={ContactStyle.typography}
                            fontSize={40}
                            variant="h3"
                            component="h3">
                            email
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
