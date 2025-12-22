import React from "react";
import { Box, Typography, LinearProgress, Stack } from "@mui/material";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaReact } from "react-icons/fa";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, value: 96, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, value: 85, color: "#264de4" },
  { name: "Bootstrap", icon: <FaBootstrap />, value: 88, color: "#7952b3" },
  { name: "Git", icon: <FaGitAlt />, value: 70, color: "#f1502f" },
  { name: "React", icon: <FaReact />, value: 55, color: "#61dafb" },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: "#f9f7ff",
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
                bgcolor: "#fff",
                borderRadius: 3,
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
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
                  {skill.value}%
                </Typography>
              </Stack>

              {/* Progress Bar */}
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#e5e0ff",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: skill.color,
                    borderRadius: 5,
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


