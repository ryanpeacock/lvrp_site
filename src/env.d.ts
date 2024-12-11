/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_SERMON_AUDIO_SECRET: string;
  readonly PUBLIC_API_ACCESS_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
