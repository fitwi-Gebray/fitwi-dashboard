import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar({ open }) {
  return (
    <Box
      sx={{
        width: open ? 240 : 0,
        overflow: "hidden",
        transition: "width 0.3s ease",
        backgroundColor: "#1e1e1e",
        color: "white",
        p: open ? 2 : 0,
      }}
    >
      {open && (
        <>
          <Typography variant="h6" sx={{ mb: 3 }}>
            Fitwi Dashboard
          </Typography>

          <List>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Overview" />
            </ListItemButton>

            <ListItemButton component={Link} to="/analytics">
              <ListItemText primary="Analytics" />
            </ListItemButton>

            <ListItemButton component={Link} to="/users">
              <ListItemText primary="Users" />
            </ListItemButton>

            <ListItemButton component={Link} to="/settings">
              <ListItemText primary="Settings" />
            </ListItemButton>
          </List>
        </>
      )}
    </Box>
  );
}
