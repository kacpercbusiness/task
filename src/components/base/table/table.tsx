import React from 'react';

import { TableProvider, useTableContext } from './table.context';
import styles from './table.module.css';

type TableProps<T> = {
  children: React.ReactNode;
  className?: string;
  onRowClick?: (item: T) => void;
};

function TableRoot<T>({
  children,
  className = '',
  onRowClick,
}: TableProps<T>) {
  return (
    <TableProvider onRowClick={onRowClick}>
      <div className={styles.tableContainer}>
        <table className={`${styles.table} ${className}`}>
          {children}
        </table>
      </div>
    </TableProvider>
  );
}

const Head = ({ children }: { children: React.ReactNode }) => (
  <thead className={styles.thead}>{children}</thead>
);

const Body = ({ children }: { children: React.ReactNode }) => (
  <tbody className={styles.tbody}>{children}</tbody>
);

const Row = <T,>({
  children,
  item,
}: {
  children: React.ReactNode;
  item?: T;
}) => {
  const { onRowClick } = useTableContext();

  return (
    <tr
      className={`${styles.tr} ${onRowClick ? styles.clickable : ''}`}
      onClick={() => item && onRowClick?.(item)}
    >
      {children}
    </tr>
  );
};

const Cell = ({
  children,
  className = '',
  header = false,
}: {
  children: React.ReactNode;
  className?: string;
  header?: boolean;
}) => {
  const Component = header ? 'th' : 'td';

  return (
    <Component className={`${header ? styles.th : styles.td} ${className}`}>
      {children}
    </Component>
  );
};

export const Table = Object.assign(TableRoot, {
  Head,
  Body,
  Row,
  Cell,
});