import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";


const projects = [
    {
        name: "Neha - Portfolio",
        description: "Developed a fully responsive portfolio landing page using React, css and React Bootstrap, featuring modern layout, styled components, smooth visuals for an engaging user experience.",
        liveLink: "neha-portfolio-zeta.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Neha-Portfolio"
    },
    {
        name: "Fresh-Cart – Fruits Website",
        description: "Created a simple and responsive multi-page website for fresh fruits using React Router DOM, showcasing Home, Products, About, and a Contact pages with a clean and modern design.",
        liveLink: "https://fresh-cart-peach-mu.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Fresh-Cart"
    },
    {
        name: "Grand-Oria – Hotel Landing Page",
        description: "Developed a fully responsive hotel landing page using React, css and React Bootstrap, featuring modern layout, styled components, and smooth visuals for an engaging user experience.",
        liveLink: "https://grand-oria.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/GrandOria"
    },
    {
        name: "JG University – Landing Page",
        description: "Built a modern and fully responsive university website using React and MUI. The site features interactive components. It highlights courses, faculty details, events, and contact information.",
        liveLink: "https://jg-university.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/JG-University"
    },
    {
        name: "Elegance - Hotel Website",
        description: "Developed a fully responsive hotel landing page using HTML, CSS and Bootstrap, featuring modern layout, styled components, and smooth visuals for an engaging user experience.",
        liveLink: "https://elegance-bootstrap.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/elegance-bootstrap"
    }

];

const Projects = () => {
    return (
        <Box
            id="projects"
            sx={{
                py: 12,
                px: 2,
                backgroundColor: "#f4f2ff",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h4"
                fontWeight="700"
                color="#6b3fa0"
                mb={6}
            >
                My Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center"
                sx={{
                    maxWidth: 1440,
                    mx: "auto",
                }}>
                {projects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card
                            sx={{
                                p: 2,
                                maxWidth: 580,
                                mx: "auto",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                // height: "100%", 
                                minHeight: 100,
                                borderRadius: 3,
                                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "translateY(-10px)",
                                    boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                                },
                                background: "linear-gradient(145deg, #ffffff, #f0eaff)",
                            }}
                        >
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    fontWeight="600"
                                    mb={1}
                                    sx={{ color: "#4b2a85" }}
                                >
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 1,
                                    flexWrap: "wrap",
                                }}>
                                <Button
                                    size="big"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#6b3fa0",
                                        "&:hover": { backgroundColor: "#532a84" },
                                    }}
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MdLaunch style={{ marginRight: "5px" }} />  Live
                                </Button>
                                <Button
                                    size="big"
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#6b3fa0",
                                        "&:hover": { backgroundColor: "#532a84" },
                                    }}
                                    href={project.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub style={{ marginRight: "5px" }} />   CODE
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;
