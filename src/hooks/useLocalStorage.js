import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = React.useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setLocalStorage = (value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setLocalStorage];
};

export { useLocalStorage };
