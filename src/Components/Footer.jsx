import React from "react";
import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const footer = () => {
  return (
    <Box
      sx={{mt: 6}}
    >
      {/* Name */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: "#6a4c93", mb: 1 }}
      >
        Neha Vaghasiya
      </Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: 400, color: "#6a4c93", mb: 1 }}
      >
        <p>
          Web Developer passionate about building responsive and
          user-friendly websites.
        </p>
      </Typography>

      {/* Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" >
        <IconButton
          component={Link}
          href="https://github.com/nehavaghasiya1502"
          target="_blank"
          sx={{ color: "#6a4c93" }}
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/neha-vaghasiya-69a34330b"
          target="_blank"
          sx={{ color: "#6a4c93" }}
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component={Link}
          href="mailto:nehavaghasiya573@gmail.com"
          sx={{ color: "#6a4c93" }}
        >
          <EmailIcon />
        </IconButton>

      </Stack>
      <Typography
        sx={{
          mt: 2,
          borderTop: "1px solid #c9b6e4",
          textAlign: "center",
        }}></Typography>
      <Typography
        variant="body2"
        sx={{ fontWeight: 400, color: "#6a4c93", mb: 1, mt: 4 }}
      >
        <p>
          @ 2025 Neha Vaghasiya. All Rights Reserved.
        </p>
      </Typography>
    </Box>
  );
};

export default footer;
