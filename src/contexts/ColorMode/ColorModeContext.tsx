import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

type ColorMode = "light" | "dark";

interface ColorModeContext {
  toggleColorMode: () => void;
  useColorMode: () => ColorMode;
}

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  useColorMode: () => "light",
} as ColorModeContext);

export const ColorModeContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [mode, setMode] = useState<ColorMode>("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        console.log(mode);
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      useColorMode: () => mode,
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

export function useColorModeContext() {
  return useContext(ColorModeContext);
}
