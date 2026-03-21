import { useIntervalValue } from 'src/hooks/use-interval-value';

import styles from './random-number.module.css';

export const RandomNumber = () => {
  const num = useIntervalValue(() => Math.random(), 10_000);

  return (
    <div
      className={styles.container}
      role="status"
      aria-live="polite"
      aria-label={`Random number: ${num.toFixed(5)}`}
    >
      <span className={styles.number}>{num.toFixed(5)}</span>
    </div>
  );
};