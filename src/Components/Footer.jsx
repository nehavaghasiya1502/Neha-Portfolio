// import React from "react";
// import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import EmailIcon from "@mui/icons-material/Email";

// const footer = () => {
//   return (
//     <Box
//       sx={{mt: 6}}
//     >
//       {/* Name */}
//       <Typography
//         variant="h6"
//         sx={{ fontWeight: 600, color: "#6a4c93", mb: 1 }}
//       >
//         Neha Vaghasiya
//       </Typography>
//       <Typography
//         variant="body2"
//         sx={{ fontWeight: 400, color: "#6a4c93", mb: 1 }}
//       >
//         <p>
//           Web Developer passionate about building responsive and
//           user-friendly websites.
//         </p>
//       </Typography>

//       {/* Icons */}
//       <Stack direction="row" spacing={2} justifyContent="center" >
//         <IconButton
//           component={Link}
//           href="https://github.com/nehavaghasiya1502"
//           target="_blank"
//           sx={{ color: "#6a4c93" }}
//         >
//           <GitHubIcon />
//         </IconButton>

//         <IconButton
//           component={Link}
//           href="https://www.linkedin.com/in/neha-vaghasiya-106b743a1"
//           target="_blank"
//           sx={{ color: "#6a4c93" }}
//         >
//           <LinkedInIcon />
//         </IconButton>

//         <IconButton
//           component={Link}
//           href="mailto:nehavaghasiya573@gmail.com"
//           sx={{ color: "#6a4c93" }}
//         >
//           <EmailIcon />
//         </IconButton>

//       </Stack>
//       <Typography
//         sx={{
//           mt: 2,
//           borderTop: "1px solid #c9b6e4",
//           textAlign: "center",
//         }}></Typography>
//       <Typography
//         variant="body2"
//         sx={{ fontWeight: 400, color: "#6a4c93", mb: 1, mt: 4 }}
//       >
//         <p>
//           @ 2025 Neha Vaghasiya. All Rights Reserved.
//         </p>
//       </Typography>
//     </Box>
//   );
// };

// export default footer;
import React from "react";
import { Box, Typography, IconButton, Stack, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  // To detect when footer is in view
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false }); // trigger every time in view

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box sx={{ mt: 6 }} ref={ref}>
      {/* Name */}
      <motion.div initial="hidden" animate={controls} variants={fadeUp}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#6a4c93", mb: 1 }}
        >
          Neha Vaghasiya
        </Typography>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={fadeUp}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 400, color: "#6a4c93", mb: 1 }}
        >
          Web Developer passionate about building responsive and
          user-friendly websites.
        </Typography>
      </motion.div>

      {/* Icons */}
      <motion.div initial="hidden" animate={controls} variants={fadeUp}>
        <Stack direction="row" spacing={2} justifyContent="center">
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
            href="https://www.linkedin.com/in/neha-vaghasiya-106b743a1"
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
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={fadeUp}>
        <Typography
          sx={{
            mt: 2,
            borderTop: "1px solid #c9b6e4",
            textAlign: "center",
          }}
        ></Typography>
        <Typography
          variant="body2"
          sx={{ fontWeight: 400, color: "#6a4c93", mb: 1, mt: 4 }}
        >
          @ 2025 Neha Vaghasiya. All Rights Reserved.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default Footer;
