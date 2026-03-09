import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import portfolio from "../assets/portfolio.png";
import showflix from "../assets/showflix.png";
import adminPanel from "../assets/admin-panel.png";
import ecommerce from "../assets/ecommerce.png";
import rickMorty from "../assets/rick-morty.png";
import financeTracker from "../assets/finance-tracker.png";
import quiz from "../assets/quiz.png";

const projects = [
    {
        name: "Neha - Portfolio",
        image: portfolio,
        description: "Developed a fully responsive portfolio landing page using React, CSS and React Bootstrap with modern UI, smooth animations and clean layout.",
        liveLink: "https://neha-portfolio2.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Neha-Portfolio"
    },

    {
        name: "ShowFlix – Show Review App",
        image: showflix,
        description: "Movie review app built with React, fully responsive and TVMaze API to explore shows and add reviews.",
        liveLink: "https://show-review-app.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Show-Review-App"
    },

    {
        name: "E-commerce Admin Panel",
        image: adminPanel,
        description: "Created an admin dashboard using React for managing products, users and orders with responsive layout, reusable components and modern UI.",
        liveLink: "https://admin-panel-six-bay.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Admin-Panel"
    },
    {
        name: "E-commerce Website",
        image: ecommerce,
        description: "Built a responsive e-commerce website using React with product listing, cart UI, filtering options and modern design for better user experience.",
        liveLink: "https://e-commerce-rho-six-48.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/E-Commerce"
    },
    {
        name: "Finance Tracker",
        description: "Personal finance tracker built with React that allows users to add income and expenses, view transaction history and track balance with a clean and responsive UI.",
        image: financeTracker,
        liveLink: "https://finance-tracker-app-topaz.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Finance-Tracker-App"
    },
    {
        name: "Quiz App",
        description: "Interactive quiz application built with React featuring multiple questions, score tracking, dynamic UI updates and responsive design for a smooth user experience.",
        image: quiz,
        liveLink: "https://quiz-app-kappa-amber.vercel.app",
        code: "https://github.com/nehavaghasiya1502/Quiz-App"
    },
    {
        name: "Rick and Morty API Project",
        image: rickMorty,
        description: "Developed a React app using Rick and Morty API to display characters, search functionality and responsive UI with dynamic data fetching.",
        liveLink: "https://rick-and-morty2-ebon.vercel.app/",
        code: "https://github.com/nehavaghasiya1502/Rick-and-Morty2"
    },
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
                overflow: "hidden"
            }}
        >
            <Typography variant="h4" fontWeight="700" color="#6b3fa0" mb={6}>
                My Projects
            </Typography>

            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1440, mx: "auto" }}>
                {projects.map((project, index) => {

                    return (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <Card
                                sx={{
                                    position: "relative",
                                    height: {
                                        xs: 220,
                                        sm: 240,
                                        md: 260
                                    },
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                                    transition: `all 0.8s ease ${index * 0.15}s`,
                                    opacity: show ? 1 : 0,
                                    transform: show ? "translateY(0)" : "translateY(80px)",

                                    "&:hover img": {
                                        transform: "scale(1.1)"
                                    },

                                    "&:hover .overlay": {
                                        opacity: 1,
                                        transform: "translateY(0)"
                                    }
                                }}
                            >

                                <img
                                    src={project.image}
                                    alt={project.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "0.5s"
                                    }}
                                />

                                <Box
                                    className="overlay"
                                    sx={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.2))",
                                        color: "white",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                        p: 3,
                                        opacity: 0,
                                        transform: "translateY(40px)",
                                        transition: "0.4s"
                                    }}
                                >

                                    <Typography variant="h6" fontWeight="bold">
                                        {project.name}
                                    </Typography>

                                    <Typography variant="body2" mb={2}>
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: "flex", gap: 1 }}>

                                        <Button
                                            variant="contained"
                                            href={project.liveLink}
                                            target="_blank"
                                            sx={{
                                                background: "#8b5cf6",
                                                "&:hover": { background: "#6d28d9" }
                                            }}
                                        >
                                            <MdLaunch style={{ marginRight: 5 }} />
                                            Live
                                        </Button>

                                        <Button
                                            variant="contained"
                                            href={project.code}
                                            target="_blank"
                                            sx={{
                                                background: "#111",
                                                "&:hover": { background: "#000" }
                                            }}
                                        >
                                            <FaGithub style={{ marginRight: 5 }} />
                                            Code
                                        </Button>

                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Projects;
