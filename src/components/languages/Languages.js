import React from "react";
import { Typography, Box, Paper } from "@mui/material";

import LanguagesStyle from "./style/LanguagesStyle.js";

export default function Language() {
    return (
        <Box display="flex" justifyContent="center" mt={3}>
            <Paper
                elevation={6}
                sx={{
                    width: "80%",
                }}>
                <Box display="flex" justifyContent="center" pt={1}>
                    <Typography
                        style={LanguagesStyle.typography}
                        fontSize={40}
                        variant="h3"
                        component="h3">
                        Languages
                    </Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    pl="12%"
                    pr="12%"
                    pt="1%">
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                        }}
                        mb={10}>
                        <Paper
                            sx={{
                                width: 400,
                                height: 400,
                            }}
                            elevation={6}>
                            <Typography
                                pt="1%"
                                display="flex"
                                justifyContent="center"
                                style={LanguagesStyle.typography}
                                fontSize={40}
                                variant="h3"
                                component="h3">
                                Current:
                            </Typography>
                        </Paper>
                    </Box>
                    <Box
                        sx={{
                            width: 400,
                            height: 400,
                        }}
                        mb={10}>
                        <Paper
                            sx={{
                                width: 400,
                                height: 400,
                            }}
                            elevation={6}>
                            <Typography
                                pt="1%"
                                display="flex"
                                justifyContent="center"
                                style={LanguagesStyle.typography}
                                fontSize={40}
                                variant="h3"
                                component="h3">
                                On my list:
                            </Typography>
                        </Paper>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
}
