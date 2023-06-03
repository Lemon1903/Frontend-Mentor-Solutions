import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useDarkMode(): [boolean, (value: boolean) => void] {
  const isDarkModeOS = matchMedia("(prefers-color-scheme: dark)").matches;
  const [enabled, setEnabled] = useLocalStorage("dark-mode", isDarkModeOS);

  useEffect(() => {
    const bodyClass = document.body.classList;
    enabled ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [enabled]);

  return [enabled, setEnabled];
}
