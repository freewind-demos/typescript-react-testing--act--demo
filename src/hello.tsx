import React from 'react'
import useMyHook from "./useMyHook";

export default function Hello() {
  const value = useMyHook();
  return <div>
    <div>Value: {value}</div>
  </div>
};

