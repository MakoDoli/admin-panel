"use client";

import * as React from "react";

import Box from "@mui/material/Box";
import { createTheme, useTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";

import { montserrat } from "@/utils/fonts";

import EditUsers from "../manage-users/EditUsers";
import { NAVIGATION } from "./Navigation";
import Signout from "./Signout";
import Summary from "./Summary";
import UsersTable from "./UsersTable";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  typography: {
    fontFamily: "Montserrat",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default, //
        color: theme.palette.text.primary,
        transition: "background-color 0.3s, color 0.3s",
      }}
      className={`${montserrat.className} h-screen p-0`}
    >
      {pathname === "/overview" && (
        <Summary theme={theme.palette.background.default} />
      )}
      {pathname === "/overview" && <UsersTable />}
      {pathname === "/users" && <EditUsers />}
      {pathname === "/logout" && <Signout />}
    </Box>
  );
}

export default function Overview() {
  const router = useDemoRouter("/overview");

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: null,
        title: "Dashboard",
        homeUrl: "/overview",
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}
