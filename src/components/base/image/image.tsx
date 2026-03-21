import { useState } from 'react';

import { Skeleton } from '../skeleton/skeleton';

import styles from './image.module.css';

import type { CSSProperties, FC } from 'react';

type ImageProps = {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: string | number;
  className?: string;
  containerClassName?: string;
  objectFit?: CSSProperties['objectFit'];
}

export const Image: FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  className = '',
  containerClassName = '',
  objectFit = 'cover',
}) => {
  const [imgState, setImgState] = useState({
    isLoaded: false,
    hasError: false,
  });

  const showPreloader = !imgState.isLoaded && !imgState.hasError;

  const handleLoad = () => setImgState({ isLoaded: true, hasError: false });
  const handleError = () => setImgState({ isLoaded: false, hasError: true });

  const containerStyle: CSSProperties = {
    width,
    height,
    ...(aspectRatio !== undefined && { aspectRatio: String(aspectRatio) }),
  };

  return (
    <div
      className={`${styles.container} ${containerClassName}`}
      style={containerStyle}
    >
      {showPreloader && (
        <Skeleton width="100%" height="100%" className={styles.skeleton} />
      )}

      {imgState.hasError && (
        <div className={styles.error} role="alert" aria-live="assertive">
          Failed to load image
        </div>
      )}

      {!imgState.hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${styles.image} ${imgState.isLoaded ? styles.loaded : ''} ${className}`}
          style={{ objectFit }}
        />
      )}
    </div>
  );
};
