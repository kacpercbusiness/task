/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KITTENS_URL: string;
}

declare const __APP_ENV__: 'development' | 'production' | 'test';
  