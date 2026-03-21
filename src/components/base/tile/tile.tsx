import styles from './tile.module.css';

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type TileProps = {
  children: ReactNode;
  padding?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick: () => void;
} & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'>;

const TileButton: FC<TileProps> = ({
  children,
  padding = 'md',
  className = '',
  onClick,
  'aria-label': ariaLabel,
}) => {
  const combinedClassName = `${styles.tile} ${styles[padding]} ${className}`;

  return (
    <button
      type="button"
      className={combinedClassName}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

const TileComponent: FC<Omit<TileProps, 'onClick'>> = ({
  children,
  padding = 'md',
  className = '',
}) => {
  const combinedClassName = `${styles.tile} ${styles[padding]} ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export const Tile = Object.assign(TileComponent, {
  Button: TileButton
});
