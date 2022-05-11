import React from "react";
import {
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import ListSharpIcon from "@mui/icons-material/ListSharp";
import AssignmentSharpIcon from "@mui/icons-material/AssignmentSharp";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Drawer, DrawerHeader } from "./ContainerTheme";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const Container: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const handleListToggle = (value: string): void => {
    navigate(`/${value.toLowerCase()}Form`);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Demo App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["User", "Project", "Task"].map((text, index) => (
            <ListItemButton
              key={text}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => handleListToggle(text)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {text === "User" ? (
                  <PersonIcon />
                ) : text === "Project" ? (
                  <AssignmentSharpIcon />
                ) : (
                  <ListSharpIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Container;
