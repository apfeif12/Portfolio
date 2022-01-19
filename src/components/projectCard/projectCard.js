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
} from "@mui/material";

import projects from "../../utils/data/projects.js";

function ProjectCard() {
    return (
        <Box mt={10} justifyContent="center">
            <Grid
                container
                direction="row"
                item
                xs={12}
                spacing={0}
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: "50vh" }}>
                {projects.map((projects, id) => {
                    return (
                        <Card variant="outlined" key={id}>
                            <CardContent>
                                <LinkPreview
                                    url={projects.url}
                                    width="250px"
                                    textAlign="center"
                                    descriptionLength={5}
                                    openInNewTab={true}
                                />

                                <Typography
                                    variant="h6"
                                    component="h6"
                                    textAlign="center">
                                    {projects.name}
                                </Typography>
                                <Box
                                    sx={{
                                        width: 200,
                                        height: 80,
                                        padding: 3,
                                    }}>
                                    <Typography
                                        variant="subtitle2"
                                        textAlign="center">
                                        {projects.description}
                                    </Typography>
                                </Box>
                            </CardContent>

                            <Box sx={{ justifyContent: "center" }}>
                                <CardContent>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        textAlign="center">
                                        {projects.language}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button
                                        size="large"
                                        href={projects.githubURL}>
                                        See it on Github
                                    </Button>
                                </CardActions>
                            </Box>
                        </Card>
                    );
                })}
            </Grid>
        </Box>
    );
}

export default ProjectCard;
