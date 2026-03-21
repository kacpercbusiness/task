import styles from './text.module.css';

import type { FC, ReactNode } from 'react';

type TextProps = {
  children: ReactNode;
  variant?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?: 'normal' | 'bold';
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  id?: string;
}

export const Text: FC<TextProps> = ({
  children,
  variant = 'md',
  weight = 'normal',
  as: Component = 'p',
  className = '',
  id,
}) => {
  const combinedClassName = `${styles.text} ${styles[variant]} ${styles[weight]} ${className}`;

  return (
    <Component className={combinedClassName} id={id}>
      {children}
    </Component>
  );
};
