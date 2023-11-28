import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Box,
  Drawer,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
const drawerWidth = 240;

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box>
          <Typography sx={{ padding: 2 }} variant="h5">
            xDuoed Notes
          </Typography>
        </Box>
        {/* List Links */}
        <List>
          {menuItems.map((item) => (
            <ListItemButton
              sx={{
                background: location.pathname === item.path ? "#f4f4f4" : null,
              }}
              onClick={() => navigate(item.path)}
              key={item.text}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default Sidebar;
