import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import type { ReactNode } from "react";

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
});

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      {children}
    </ChakraProvider>
  );
}
