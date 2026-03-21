import styles from './skeleton.module.css';

import type { FC } from 'react';

type SkeletonProps = {
  width?: string | number;
  height?: string | number;
  variant?: 'text' | 'circular' | 'rectangular';
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({
  width,
  height,
  variant = 'rectangular',
  className = '',
}) => {
  const style = {
    width: width,
    height: height,
  };

  const combinedClassName = `${styles.skeleton} ${styles[variant]} ${className}`;

  return <div className={combinedClassName} style={style} />;
};
