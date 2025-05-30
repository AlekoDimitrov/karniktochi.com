import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const footerLinks = [
  { text: "Начало", href: "/" },
  { text: "Блог", href: "/articles" },
  { text: "За нас", href: "/about" },
  { text: "Контакти", href: "/contacts" },
  { text: "Собственик", href: "https://github.com/AlekoDimitrov" },
];

const Footer = () => {
  return (
    <>
      <Divider />
      <Box padding={"24px"}>
        <List>
          {footerLinks.map((link, key) => {
            return (
              <ListItem
                className="footerListItems"
                key={key}
                sx={{ padding: 0 }}
              >
                <Link href={link.href}>
                  <a>
                    <Typography variant="caption">{link.text}</Typography>
                  </a>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default Footer;
