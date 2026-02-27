import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";

// const projects = [
//     {
//         name: "Neha - Portfolio",
//         description: "Developed a fully responsive portfolio landing page using React, css and React Bootstrap, featuring modern layout, styled components, smooth visuals for an engaging user experience.",
//         liveLink: "https://neha-portfolio-zeta.vercel.app/",
//         code: "https://github.com/nehavaghasiya1502/Neha-Portfolio"
//     },
//     {
//         name: "Fresh-Cart – Fruits Website",
//         description: "Created a simple and responsive multi-page website for fresh fruits using React Router DOM, showcasing Home, Products, About, and a Contact pages with a clean and modern design.",
//         liveLink: "https://fresh-cart-peach-mu.vercel.app/",
//         code: "https://github.com/nehavaghasiya1502/Fresh-Cart"
//     },
//     {
//         name: "Grand-Oria – Hotel Landing Page",
//         description: "Developed a fully responsive hotel landing page using React, css and React Bootstrap, featuring modern layout, styled components, and smooth visuals for an engaging user experience.",
//         liveLink: "https://grand-oria.vercel.app/",
//         code: "https://github.com/nehavaghasiya1502/GrandOria"
//     },
//     {
//         name: "JG University – Landing Page",
//         description: "Built a modern and fully responsive university website using React and MUI. The site features interactive components. It highlights courses, faculty details, events, and contact information.",
//         liveLink: "https://jg-university.vercel.app/",
//         code: "https://github.com/nehavaghasiya1502/JG-University"
//     },
//     {
//         name: "Elegance - Hotel Website",
//         description: "Developed a fully responsive hotel landing page using HTML, CSS and Bootstrap, featuring modern layout, styled components, and smooth visuals for an engaging user experience.",
//         liveLink: "https://elegance-bootstrap.vercel.app/",
//         code: "https://github.com/nehavaghasiya1502/elegance-bootstrap"
//     }
// ];

const projects = [
    {
        name: "Neha - Portfolio",
        description: "Developed a fully responsive portfolio landing page using React, CSS and React Bootstrap with modern UI, smooth animations and clean layout.",
        liveLink: "https://neha-portfolio-zeta.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Neha-Portfolio"
    },

    {
        name: "ShowFlix – Show Review App",
        description: "Movie review app built with React, fully responsive and TVMaze API to explore shows and add reviews.",
        liveLink: "https://show-review-app.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Show-Review-App"
    },

    {
        name: "E-commerce Admin Panel",
        description: "Created an admin dashboard using React for managing products, users and orders with responsive layout, reusable components and modern UI.",
        liveLink: "https://admin-panel-six-bay.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Admin-Panel"
    },

    {
        name: "Rick and Morty API Project",
        description: "Developed a React app using Rick and Morty API to display characters, search functionality and responsive UI with dynamic data fetching.",
        liveLink: "https://rick-and-morty2-ebon.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Rick-and-Morty2"
    },

    {
        name: "E-commerce Website",
        description: "Built a responsive e-commerce website using React with product listing, cart UI, filtering options and modern design for better user experience.",
        liveLink: "https://e-commerce-rho-six-48.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/E-Commerce"
    }
];

const Projects = () => {
    const sectionRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                } else {
                    setShow(false);
                }
            },
            { threshold: 0.25 }
        );

        const currentSection = sectionRef.current;

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <Box
            id="projects"
            ref={sectionRef}
            sx={{
                py: 12,
                px: 2,
                backgroundColor: "#f4f2ff",
                textAlign: "center",
                scrollMarginTop: "20px",
            }}
        >
            <Typography variant="h4" fontWeight="700" color="#6b3fa0" mb={6}>
                My Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1440, mx: "auto" }}>
                {projects.map((project, index) => {

                    let hiddenTransform = "translateX(-80px)";
                    if (index % 2 === 1) hiddenTransform = "translateX(80px)";
                    if (index === 4) hiddenTransform = "translateY(80px)";

                    return (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card
                                sx={{
                                    p: 2,
                                    maxWidth: 580,
                                    mx: "auto",
                                    minHeight: 100,
                                    borderRadius: 3,
                                    background: "linear-gradient(145deg, #ffffff, #f0eaff)",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                    transition: `all 0.8s ease ${index * 0.15}s`,
                                    opacity: show ? 1 : 0,
                                    transform: show ? "translate(0)" : hiddenTransform,
                                    "&:hover": {
                                        transform: "translateY(-10px)",
                                        boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
                                    },
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6" fontWeight="600" mb={1} sx={{ color: "#4b2a85" }}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>

                                <CardActions sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap" }}>
                                    <Button
                                        variant="contained"
                                        sx={{ backgroundColor: "#6b3fa0", "&:hover": { backgroundColor: "#532a84" } }}
                                        href={project.liveLink}
                                        target="_blank"
                                    >
                                        <MdLaunch style={{ marginRight: "5px" }} /> Live
                                    </Button>

                                    <Button
                                        variant="contained"
                                        sx={{ backgroundColor: "#6b3fa0", "&:hover": { backgroundColor: "#532a84" } }}
                                        href={project.code}
                                        target="_blank"
                                    >
                                        <FaGithub style={{ marginRight: "5px" }} /> Code
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Projects;
