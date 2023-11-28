import React from "react";
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material";
import { format } from "date-fns";

function Navbar() {
  const drawerWidth = 240;
  return (
    <Box>
      <AppBar
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          borderBottom: "1px solid #d7d7d7",
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography> xMo</Typography>
          <Avatar sx={{ marginLeft: 2 }} src="assets/myself.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
