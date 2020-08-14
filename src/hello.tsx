import React, {useEffect, useState} from 'react'

export default function Hello() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(1)
  }, []);
  return <div>
    <div>Value: {value}</div>
  </div>
};

