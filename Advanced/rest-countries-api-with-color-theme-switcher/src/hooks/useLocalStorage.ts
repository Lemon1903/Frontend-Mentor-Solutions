import { useCallback, useState } from "react";
import { SetValue } from "../types";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, SetValue<T>] {
  const readValue = useCallback(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? (parseJSON(value) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [key, initialValue]);

  const [storedValue, setStoredValue] = useState<T>(readValue);

  const setValue: SetValue<T> = function (value) {
    try {
      const newValue = value instanceof Function ? value(storedValue) : value;
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

function parseJSON(value: string | null) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
