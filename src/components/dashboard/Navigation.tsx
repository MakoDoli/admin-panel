import { GridView, Logout, PeopleAltOutlined } from "@mui/icons-material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupIcon from "@mui/icons-material/Group";
import { type Navigation } from "@toolpad/core/AppProvider";

export const NAVIGATION: Navigation = [
  {
    segment: "overview",
    title: "Overview",
    icon: <GridView />,
  },
  {
    segment: "users",
    title: "Manage users",
    icon: <PeopleAltOutlined />,
  },
  { segment: "logout", title: "Sign out", icon: <Logout /> },
];
