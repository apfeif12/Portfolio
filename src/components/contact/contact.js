import React from "react";
import { Typography, Box, Paper, Link } from "@mui/material";

import ContactStyle from "./style/ContactStyle.js";

export default function Contact() {
    return (
        <Box id="contact" display="flex" justifyContent="center" pt={5} mb={5}>
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
                        You can find me on:
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-evenly" pl="8%">
                    <Box>
                        <Link
                            style={ContactStyle.typography}
                            fontSize={40}
                            href="https://github.com/apfeif12">
                            Github
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            style={ContactStyle.typography}
                            fontSize={40}
                            href="https://www.linkedin.com/in/alex-pfeifer12/">
                            LinkedIn
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            style={ContactStyle.typography}
                            fontSize={40}
                            href="mailto:apfeif.12@gmail.com"
                            target="_top">
                            apfeif.12@gmail
                        </Link>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
