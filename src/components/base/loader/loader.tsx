import styles from './loader.module.css';

import type { FC } from 'react';

type LoaderProps = {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ size = 'md', className = '' }) => {
  const combinedClassName = `${styles.loader} ${styles[size]} ${className}`;

  return (
    <div
      className={combinedClassName}
      role="status"
      aria-label="Loading"
      aria-live="polite"
    />
  );
};
