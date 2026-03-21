import { useEffect, useRef, useState } from 'react';

export const useIntervalValue = <T>(
  generator: () => T,
  delay: number
) => {
  const [value, setValue] = useState<T>(generator);
  const savedGenerator = useRef(generator);

  useEffect(() => {
    savedGenerator.current = generator;
  }, [generator]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(savedGenerator.current());
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  return value;
};