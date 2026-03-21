import styles from './avatar.module.css';

import type { FC } from 'react';

type AvatarProps = {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const AvatarComponent: FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  className = '',
}) => {
  const combinedClassName = `${styles.avatar} ${styles[size]} ${className}`;

  return <img src={src} alt={alt} className={combinedClassName} />;
};

type AvatarInitialsProps = {
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  ariaLabel?: string;
}

const AvatarInitials: FC<AvatarInitialsProps> = ({
  initials,
  size = 'md',
  className = '',
  ariaLabel,
}) => {
  const combinedClassName = `${styles.avatar} ${styles[size]} ${className}`;

  return (
    <div
      className={`${combinedClassName} ${styles.initials}`}
      role="img"
      aria-label={ariaLabel ?? (initials ? `User avatar: ${initials}` : 'User avatar')}
    >
      {initials ? initials.substring(0, 2).toUpperCase() : '?'}
    </div>
  );
};

export const Avatar = Object.assign(AvatarComponent, {
  Initials: AvatarInitials
});