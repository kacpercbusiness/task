import { Link, Outlet } from "react-router";

import { Layout } from '../../base/layout/layout';

import styles from './app-layout.module.css';

export function AppLayout() {
  return (
    <Layout>
      <Layout.Header>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </nav>
      </Layout.Header>
      <Layout.Body>
        <Layout.Main>
          <Outlet />
        </Layout.Main>
      </Layout.Body>
    </Layout>
  );
}
