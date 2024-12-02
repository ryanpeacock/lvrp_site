/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SERMON_AUDIO_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
