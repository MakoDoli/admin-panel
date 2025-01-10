import { Logout } from "@mui/icons-material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { type Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    segment: "overview",
    title: "Overview",
    icon: <DashboardIcon />,
  },
  {
    segment: "users",
    title: "Manage users",
    icon: <GroupIcon />,
  },
  { segment: "logout", title: "Sign out", icon: <Logout /> },
];
