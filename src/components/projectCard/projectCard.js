import React from "react";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
import {
    Typography,
    Grid,
    CardActions,
    CardContent,
    Button,
    Card,
    Box,
    Paper,
} from "@mui/material";

import projects from "../../utils/data/projects.js";

import ProjectCardStyle from "./style/ProjectCardStyle.js";

export default function ProjectCard() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            mt={2}>
            <Paper
                elevation={6}
                sx={{
                    width: "80%",
                }}>
                <Box display="flex" justifyContent="center" pt={2}>
                    <Typography
                        style={ProjectCardStyle.typography}
                        fontSize={40}
                        variant="h3"
                        component="h3">
                        Some of my past work:
                    </Typography>
                </Box>
                <Box mt={3} mb={10} justifyContent="center">
                    <Grid
                        container
                        direction="row"
                        item
                        xs={12}
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: "50vh" }}>
                        {projects.map((projects, id) => {
                            return (
                                <Paper elevation={3}>
                                    <Card variant="outlined" key={id}>
                                        <CardContent>
                                            <Typography
                                                variant="h5"
                                                component="h5"
                                                textAlign="center">
                                                {projects.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                textAlign="center">
                                                {projects.language}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    width: 250,
                                                    height: 400,
                                                }}>
                                                <LinkPreview
                                                    url={projects.url}
                                                    width="250px"
                                                    textAlign="center"
                                                    descriptionLength={5}
                                                    openInNewTab={true}
                                                />
                                            </Box>
                                            <Box
                                                mt={5}
                                                sx={{
                                                    width: 250,
                                                    height: 140,
                                                }}>
                                                <Typography
                                                    variant="subtitle2"
                                                    textAlign="center">
                                                    {projects.description}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                        <Box sx={{ justifyContent: "center" }}>
                                            <CardActions
                                                sx={{
                                                    justifyContent: "center",
                                                }}>
                                                <Button
                                                    size="large"
                                                    href={projects.githubURL}>
                                                    See it on Github
                                                </Button>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                </Paper>
                            );
                        })}
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}
