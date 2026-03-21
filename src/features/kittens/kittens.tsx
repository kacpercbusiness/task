import { Image } from '../../components/base/image/image';

import styles from './kittens.module.css';
import { validateImageUrl } from './utils/validate-img-url';

import type { FC } from 'react';

const IMG_WIDTH = 500;
const IMG_HEIGHT = 400;
const ASPECT_RATIO = IMG_HEIGHT / IMG_WIDTH;

export const Kittens: FC = () => {
  const baseUrl = (import.meta.env.VITE_KITTENS_URL ?? '').replace(/\/$/, '');
  const src = `${baseUrl}/${IMG_WIDTH}/${IMG_HEIGHT}`;

  const isURLValid = validateImageUrl(src);

  if (!isURLValid) {
    return (
      <div role="alert" aria-live="assertive">
        Invalid image URL
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Image
        src={src}
        alt="Kitten"
        objectFit='cover'
        aspectRatio={ASPECT_RATIO}
        width="100%"
        className={styles.image}
      />
    </div>
  );
};