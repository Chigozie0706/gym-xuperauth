import "@/styles/globals.css";
import type { AppProps } from "next/app";

import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { colors } from "@/theme/colors";
import { Notifications } from "@mantine/notifications";

export const XUPER_API_KEY =
  "test_837537090565fff4c19e8554986ccd0d22097bf76dee91cc4b8d26ddf63bafa9";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    /** Put your mantine theme override here */
    fontFamily: "DM Sans",
    colors: {
      // @ts-ignore
      template: [...colors.primary],
      // @ts-ignore
      "template-secondary": [...colors.primary],
    },
    primaryColor: "template",
    primaryShade: 5,
  });

  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
      <Notifications position="top-center" />
    </MantineProvider>
  );
}
