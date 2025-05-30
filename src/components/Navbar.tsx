import {
  AppBar,
  IconButton,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Link from "next/link";

const navbarLinks = [
  {
    href: "/",
    name: "Начало",
  },
  {
    href: "/articles",
    name: "Блог",
  },
  {
    href: "/about",
    name: "За нас",
  },
  {
    href: "/contacts",
    name: "Контакти",
  },
];

const Navbar = (props: any) => {
  const setNavigationState = () => {
    props.setMobileNavigation(!props.mobileNavigation);
  };

  return (
    <AppBar
      color="transparent"
      elevation={0}
      sx={{
        position: { sm: "absolute" },
        backgroundColor: { sm: "transparent", xs: "#5d176a" },
        maxWidth: "768px",
        left: "50%",
        right: "50%",
        transform: "translateX(-50%)",
        filter: { xs: "drop-shadow(0px 2px 10px #0000004d)", sm: "none" },
      }}
    >
      <Toolbar>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Navigation Links */}
          <Box
            className="navbarA"
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              flex: 1,
              justifyContent: "center",
            }}
          >
            {navbarLinks.map((link, key) => (
              <motion.div
                initial={{ backgroundColor: "#fff" }}
                whileHover={{
                  borderRadius: 7,
                  backgroundColor: "#f8f1f9",
                  transition: { duration: 0.3 },
                }}
                key={key}
              >
                <Link href={link.href} passHref>
                  <a>
                    <ListItem sx={{ maxWidth: "fit-content", borderRadius: 2 }}>
                      <Typography variant="caption" fontSize="16px">
                        {link.name}
                      </Typography>
                    </ListItem>
                  </a>
                </Link>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <Box
            onClick={setNavigationState}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <motion.div
              style={{ display: "flex", justifyContent: "flex-end" }}
              whileTap={{
                scale: 0.5,
                opacity: 0.5,
              }}
            >
              <IconButton
                color="inherit"
                aria-label="menu"
                className="navbarIconButton"
              >
                {props.mobileNavigation ? (
                  <IoClose color="white" />
                ) : (
                  <HiMenuAlt4 color="white" />
                )}
              </IconButton>
            </motion.div>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
