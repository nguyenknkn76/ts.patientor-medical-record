/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly PORT: number;
}

interface ImportMeta{
  readonly env: ImportMetaEnv;
}