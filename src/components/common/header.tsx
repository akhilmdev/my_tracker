import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

export function Header() {
  return (
    <Box className="grow">
      <AppBar
        position="static"
        className="bg-pageBackground shadow-none p-3"
        color="transparent"
      >
        <Toolbar className=" justify-between p-0">
          <Box className="flex gap-3">
            <Avatar alt="Akhil Mohanan" src="/static/images/avatar/1.jpg" />
            <div className="flex flex-col justify-end	gap-0">
              <span className="text-xs text-text	">Akhil Mohanan</span>
              <span className="text-lg leading-4 text-text">Good Morning</span>
            </div>
          </Box>
          <Box className="mr-4 flex justify-end text-icon gap-2">
            <IconButton
              size="large"
              aria-label="new notifications"
              color="inherit"
              className="rounded-full border border-solid	border-border p-2"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="settings"
              aria-haspopup="true"
              color="inherit"
              className="rounded-full border border-solid	border-border p-2"
            >
              <SettingsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
