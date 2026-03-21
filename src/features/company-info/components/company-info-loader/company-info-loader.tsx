import { Loader } from '../../../../components/base/loader/loader';

import { CardSkeleton } from '../card-skeleton/card-skeleton';

import styles from './company-info-loader.module.css';

import type { FC } from 'react';

export const CompanyInfoLoader: FC = () => (
  <div className={styles.container}>
    <Loader size="md" className={styles.loader} />
    <CardSkeleton />
    <CardSkeleton />
  </div>
);
