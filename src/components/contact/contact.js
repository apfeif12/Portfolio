import React from "react";
import { Typography, Box, Paper } from "@mui/material";
import { SocialMediaIconsReact } from "social-media-icons-react";

import ContactStyle from "./style/ContactStyle.js";

export default function Contact() {
    return (
        <Box id="contact" display="flex" justifyContent="center" pt={5} mb={5}>
            <Paper
                elevation={6}
                sx={{
                    width: "28%",
                }}>
                <Box display="flex" justifyContent="center" pt={2} pb={3}>
                    <Typography
                        style={ContactStyle.typography}
                        fontSize={40}
                        variant="h3"
                        component="h3">
                        Where you can find me:
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" flexDirection="column">
                    <Box pb="1%">
                        <SocialMediaIconsReact
                            borderColor="rgba(0,0,0,0.25)"
                            borderWidth="5"
                            borderStyle="solid"
                            icon="mail"
                            iconColor="rgba(255,255,255,1)"
                            backgroundColor="rgba(97,102,102,1)"
                            iconSize="5"
                            roundness="1%"
                            url="mailto:apfeif.12@gmail"
                            size="200"
                        />
                    </Box>
                    <Box pb="1%">
                        <SocialMediaIconsReact
                            borderColor="rgba(0,0,0,0.25)"
                            borderWidth="5"
                            borderStyle="solid"
                            icon="github"
                            iconColor="rgba(255,255,255,1)"
                            backgroundColor="rgba(97,102,102,1)"
                            iconSize="5"
                            roundness="1%"
                            url="https://github.com/apfeif12"
                            size="200"
                        />
                    </Box>
                    <Box pb="1%">
                        <SocialMediaIconsReact
                            borderColor="rgba(0,0,0,0.25)"
                            borderWidth="5"
                            borderStyle="solid"
                            icon="linkedin"
                            iconColor="rgba(255,255,255,1)"
                            backgroundColor="rgba(97,102,102,1)"
                            iconSize="5"
                            roundness="1%"
                            url="https://www.linkedin.com/in/alex-pfeifer12/"
                            size="200"
                        />
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
