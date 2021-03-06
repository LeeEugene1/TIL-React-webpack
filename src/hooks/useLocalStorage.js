import { useState, useEffect } from "react";
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}

export default useLocalStorage;
