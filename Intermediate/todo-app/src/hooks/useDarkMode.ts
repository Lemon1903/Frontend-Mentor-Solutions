import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    enabled ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [enabled]);

  return [enabled, setEnabled];
}
