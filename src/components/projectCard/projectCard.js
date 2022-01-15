import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";

import Item from "../../assets/styles/projectCardItem.js";

import projects from "../../utils/projects.js";

function ProjectCard() {
    return (
        <>
            {projects.map((projects, id) => {
                return (
                    <Item>
                        <Card key={id}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={projects.img}
                                alt={projects.alt}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div">
                                    {projects.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary">
                                    {projects.description}
                                </Typography>
                                <Typography
                                    variant="body3"
                                    color="text.secondary">
                                    {projects.language}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" href={projects.githubURL}>
                                    Github
                                </Button>
                                <Button size="small" href={projects.url}>
                                    Live
                                </Button>
                            </CardActions>
                        </Card>
                    </Item>
                );
            })}
        </>
    );
}

export default ProjectCard;
