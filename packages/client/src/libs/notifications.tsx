import {
  NotificationsProvider,
  showNotification,
} from "@mantine/notifications";
import { ReactNode } from "react";

import { IconError, IconSuccess } from "@comps/FontAwesomeIcons";

const error = (message: string) =>
  showNotification({
    color: "red",
    message,
    icon: <IconError />,
  });

const success = (message: string) =>
  showNotification({
    color: "green",
    message,
    icon: <IconSuccess />,
  });

export const notifications = {
  error,
  success,
};

export default ({ children }: { children: ReactNode }) => {
  return (
    <NotificationsProvider position="top-center" autoClose={3000}>
      {children}
    </NotificationsProvider>
  );
};
