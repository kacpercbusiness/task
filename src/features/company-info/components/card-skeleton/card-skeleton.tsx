import { Skeleton } from '../../../../components/base/skeleton/skeleton';

import styles from './card-skeleton.module.css';

import type { FC } from 'react';

export const CardSkeleton: FC = () => (
  <div className={styles.card}>
    <Skeleton width="60%" height={24} variant="text" className={styles.skeleton} />
    <Skeleton width="100%" height={60} variant="rectangular" className={styles.skeleton} />
  </div>
);
