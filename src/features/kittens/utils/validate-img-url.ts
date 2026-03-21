import {z} from "zod";

const ALLOWED_DOMAINS = ['placekittens.com'];

const imageUrlSchema = z.url()
  .refine((value) => {
    try {
      const url = new URL(value);

      return url.protocol === "https:";
    } catch {
      return false;
    }
  }, {
    message: "URL must use HTTPS",
  })
  .refine((value) => {
    try {
      const { hostname } = new URL(value);

      return ALLOWED_DOMAINS.includes(hostname);
    } catch {
      return false;
    }
  }, {
    message: `URL must belong to one of: ${ALLOWED_DOMAINS.join(", ")}`,
  });

export const validateImageUrl = (src: string) => imageUrlSchema.safeParse(src).success;

