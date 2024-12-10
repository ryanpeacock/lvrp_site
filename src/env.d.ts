/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_SERMON_AUDIO_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
