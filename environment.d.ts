declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number | undefined;
      JWT_KEY: string;
      DATABASE_URL: string;
    }
  }
}

export {};
