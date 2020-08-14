import {useState} from "react";

export default function useMyHook() {
  const [value, setValue] = useState(0)
  setTimeout(() => {
    setValue(1)
  }, 1000)
  return value;
}
