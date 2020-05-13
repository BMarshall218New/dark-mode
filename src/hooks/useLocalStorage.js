import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        }
        return initialValue;
    })

    const setLocalStorageValue = storedValue => {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
        setStoredValue(storedValue);
    }
    return [storedValue, setLocalStorageValue];

};
