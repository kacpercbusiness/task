import styles from './layout.module.css';

import type { FC, PropsWithChildren, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const LayoutRoot: FC<LayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.layout} ${className}`}>
      {children}
    </div>
  );
};

const Header: FC<PropsWithChildren> = ({ children }) => (
  <header className={styles.header}>{children}</header>
);

const Body: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.body}>{children}</div>
);

const Sidebar: FC<PropsWithChildren> = ({ children }) => (
  <aside className={styles.sidebar}>{children}</aside>
);

const Main: FC<PropsWithChildren> = ({ children }) => (
  <main className={styles.main}>{children}</main>
);

export const Layout = Object.assign(LayoutRoot, {
  Header,
  Body,
  Sidebar,
  Main,
});