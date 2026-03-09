import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const ContactSection = () => {

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const bottomUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        background: "linear-gradient(135deg,#f4f2ff,#e9e4ff)",
        py: 10,
        px: { xs: 3, sm: 6, md: 12 },
        textAlign: "center",
        scrollMarginTop: "70px",
      }}
    >

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={bottomUp}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            fontWeight: "bold",
            color: "#4B0082",
            letterSpacing: 1,
          }}
        >
          Contact Me
        </Typography>
      </motion.div>

      {/* Contact Card */}
      <Box
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          p: { xs: 3, sm: 5 },
        }}
      >

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stack spacing={3}>

            {/* Name */}
            <motion.div variants={bottomUp}>
              <TextField
                label="Your Name"
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f3edff",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      backgroundColor: "#efe7ff"
                    },

                    "&.Mui-focused": {
                      boxShadow: "0 6px 20px rgba(139,92,246,0.35)",
                      backgroundColor: "#f3edff"
                    }
                  }
                }}
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={bottomUp}>
              <TextField
                label="Your Email"
                fullWidth
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f3edff",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      backgroundColor: "#efe7ff"
                    },

                    "&.Mui-focused": {
                      boxShadow: "0 6px 20px rgba(139,92,246,0.35)",
                      backgroundColor: "#f3edff"
                    }
                  }
                }}
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={bottomUp}>
              <TextField
                label="Your Message"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#f3edff",
                    transition: "all 0.3s ease",

                    "&:hover": {
                      boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
                      backgroundColor: "#efe7ff"
                    },

                    "&.Mui-focused": {
                      boxShadow: "0 6px 20px rgba(139,92,246,0.35)",
                      backgroundColor: "#f3edff"
                    }
                  }
                }}
              />
            </motion.div>

            {/* Button */}
            <motion.div variants={bottomUp}>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  background: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
                  py: 1.5,
                  fontWeight: "bold",
                  letterSpacing: 1,
                  transition: "0.3s",

                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
                  },
                }}
              >
                Send Message
              </Button>
            </motion.div>

          </Stack>
        </motion.div>

      </Box>
    </Box>
  );
};

export default ContactSection;