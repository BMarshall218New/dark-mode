import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialState, key) => {
    const [value, setValue] = useLocalStorage(initialState, key);
    useEffect(() => {
        if (value) {
            document.querySelector("body").classList.add("dark-mode")
        }
        else document.querySelector("body").classList.remove("dark-mode")
    }, [value])
    return [value, setValue]
}