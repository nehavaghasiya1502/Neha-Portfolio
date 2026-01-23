import React from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";

const ContactSection = () => {
  const bottomUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#f4f2ff",
        py: 8,
        px: { xs: 3, sm: 6, md: 12 },
        textAlign: "center",
        scrollMarginTop: "70px",
      }}
    >
      {/* Heading animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={bottomUp}
      >
        <Typography
          variant="h4"
          sx={{ mb: 4, fontWeight: "bold", color: "#4B0082" }}
        >
          Contact Me
        </Typography>
      </motion.div>

      {/* Card animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={bottomUp}
      >
        <Box
          sx={{
            maxWidth: 600,
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            p: { xs: 3, sm: 5 },
          }}
        >
          <Stack spacing={3}>
            <TextField
              label="Your Name"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <TextField
              label="Your Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#9370DB",
                "&:hover": { backgroundColor: "#7B68EE" },
                color: "#fff",
                py: 1.5,
                fontWeight: "bold",
              }}
            >
              Send Message
            </Button>
          </Stack>
        </Box>
      </motion.div>
    </Box>
  );
};

export default ContactSection;
