import styles from './list.module.css';

import type { FC, ReactNode } from 'react';

type ListPropsBase = {
  className?: string;
  spacing?: 'none' | 'xs' | 'sm' | 'md' | 'lg';
  'aria-label'?: string;
};

type ListPropsWithChildren = ListPropsBase & {
  children: ReactNode;
  items?: never;
  keyExtractor?: never;
  renderItem?: never;
};

type ListPropsWithItems<T> = ListPropsBase & {
  children?: never;
  items: T[];
  keyExtractor: (item: T) => string;
  renderItem: (item: T) => ReactNode;
};

type ListProps<T> = ListPropsWithChildren | ListPropsWithItems<T>;

type ListItemProps = { className?: string; children: React.ReactNode };

function ListRoot<T>({
  className = '',
  children,
  spacing = 'sm',
  items,
  keyExtractor,
  renderItem,
  'aria-label': ariaLabel,
}: ListProps<T>) {
  const combinedClassName = `${styles.list} ${styles[spacing]} ${className}`;

  const listContent = items
    ? items.map((item) => (
        <li key={keyExtractor(item)} className={styles.listItem}>
          {renderItem(item)}
        </li>
      ))
    : children;

  return (
    <ul className={combinedClassName} aria-label={ariaLabel}>
      {listContent}
    </ul>
  );
}

const ListItem: FC<ListItemProps> = ({
  className = '',
  children,
}) => {
  return <li className={`${styles.listItem} ${className}`}>{children}</li>;
};

export const List = Object.assign(ListRoot, {
  Item: ListItem,
});
