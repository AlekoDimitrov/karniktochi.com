import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";
import { Input, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [sent, setSent] = useState<boolean>(false);

  // const form = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qcfk9nr",
        "template_2fd2kl4",
        e.target,
        "qVxnTO2UiIyXswu1b"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Box
        padding={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: { xs: 8, sm: 14 },
        }}
      >
        <Typography variant="h3">Свържете се с нас</Typography>
        <br />
        <Typography variant="body2" sx={{ color: "#6C3D83" }}>
          <a href="mailto:team@karniktochi.com">team@karniktochi.com</a>
          <br />
          <br />
          <a href="tel:+359894042223">+350 89 404 2223</a>
        </Typography>
      </Box>
    </>
  );
};

export default ContactForm;
