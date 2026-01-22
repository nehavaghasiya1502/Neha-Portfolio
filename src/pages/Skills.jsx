import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiVercel } from "react-icons/si";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, value: 96, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, value: 85, color: "#264de4" },
  { name: "Bootstrap", icon: <FaBootstrap />, value: 88, color: "#7952b3" },
  { name: "Javascript", icon: <TbBrandJavascript />, value: 70, color: "#f1d12f" },
  { name: "React", icon: <FaReact />, value: 55, color: "#61dafb" },
  { name: "Git", icon: <FaGitAlt />, value: 74, color: "#f1502f" },
  { name: "Vercel", icon: <SiVercel />, value: 79, color: "#0a0909" },
];

const Skills = () => {

  const skillsRef = useRef(null);
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
      { threshold: 0.3 }
    );

    const currentSkills = skillsRef.current;

    if (currentSkills) observer.observe(currentSkills);

    return () => {
      if (currentSkills) observer.unobserve(currentSkills);
    };
  }, []);


  return (
    <Box
      id="skills"
      ref={skillsRef}
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "#f4f2ff",
        scrollMarginTop: "100px",
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(40px)",
        transition: "all 1s ease",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="700"
        color="#8b4ea9"
        mb={6}
      >
        My Skills
      </Typography>

      <Box maxWidth="900px" mx="auto">
        <Stack spacing={3}>
          {skills.map((skill, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                backgroundColor: "#f4f2ff",
                borderRadius: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                opacity: show ? 1 : 0,
                transform: show ? "translateX(0)" : "translateX(-30px)",
                transition: `all 0.6s ease ${index * 0.15}s`,
              }}
            >
              {/* Header */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mb={1.5}
              >
                <Stack direction="row" alignItems="center" spacing={1.5}>
                  <Box sx={{ fontSize: 28, color: skill.color }}>
                    {skill.icon}
                  </Box>
                  <Typography fontWeight="600">
                    {skill.name}
                  </Typography>
                </Stack>

                <Typography fontSize={14} fontWeight="600">
                  {show ? skill.value : 0}%
                </Typography>
              </Stack>

              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={show ? skill.value : 0}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#e5e0ff",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: skill.color,
                    borderRadius: 5,
                    transition: "width 1.8s ease-in-out",
                  },
                }}
              />

            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default Skills;
