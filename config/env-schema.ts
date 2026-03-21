import {z} from "zod";

export const envSchema = z.object({
  APP_ENV: z.enum(['development', 'production', 'test']),
  VITE_KITTENS_URL: z.url(),
});
