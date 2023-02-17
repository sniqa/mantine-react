import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LoginPage from "@pages/LoginPage";
import NotFoundPage from "@pages/NotFoundPage";
import MainLayout from "@comps/layouts/MainLayout";
import { lazy } from "react";

const AccountPage = lazy(() => import("@pages/user/AccountPage"));
const DocumentPage = lazy(() => import("@pages/profile/DocumentPage"));

const ComputerPage = lazy(() => import("@pages/device/ComputerPage"));
const OfficeDevicePage = lazy(() => import("@pages/device/OfficeDevicePage"));
const NetworkDevicePage = lazy(() => import("@pages/device/NetworkDevicePage"));
const ServerPage = lazy(() => import("@pages/device/ServerPage"));
const UsbKeyPage = lazy(() => import("@pages/device/UsbKeyPage"));

const NetworkTypePage = lazy(() => import("@pages/network/NetworkTypePage"));
const IpAddressPage = lazy(() => import("@pages/network/IpAddressPage"));
const LinerPage = lazy(() => import("@pages/network/LinerPage"));
const TelPage = lazy(() => import("@pages/network/TelPage"));

export enum RouterPath {
  Root = "/",
  Login = "/login",
  Home = "/home",

  Profile = "/profile",
  Document = "/profile/document",

  Network = "/network",
  Network_type = "/network/type",
  Network_ip_address = "/network/ipaddress",
  Network_liner = "/network/liner",
  Network_tel = "/network/tel",

  User = "/user",
  Account = "/user/account",

  Device = "/device",
  Device_computer = "/device/computer",
  Device_office = "/device/office_device",
  Device_network = "/device/network_device",
  Device_server = "/device/server",
  Device_usb_key = "/device/usb_key",

  Logs = "/logs",
}

export default createBrowserRouter([
  {
    path: RouterPath.Root,
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: RouterPath.Home, element: <HomePage /> },
      { path: RouterPath.Account, element: <AccountPage /> },
      { path: RouterPath.Document, element: <DocumentPage /> },

      // device
      { path: RouterPath.Device_computer, element: <ComputerPage /> },
      { path: RouterPath.Device_office, element: <OfficeDevicePage /> },
      { path: RouterPath.Device_network, element: <NetworkDevicePage /> },
      { path: RouterPath.Device_server, element: <ServerPage /> },
      { path: RouterPath.Device_usb_key, element: <UsbKeyPage /> },

      // network
      { path: RouterPath.Network_type, element: <NetworkTypePage /> },
      { path: RouterPath.Network_ip_address, element: <IpAddressPage /> },
      { path: RouterPath.Network_liner, element: <LinerPage /> },
      { path: RouterPath.Network_tel, element: <TelPage /> },
    ],
  },

  { path: RouterPath.Login, element: <LoginPage /> },

  { path: "*", element: <NotFoundPage /> },
]);
