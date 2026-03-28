import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1).min(2),
  email: z.string().min(1).email(),
  message: z.string().min(1).min(10),
});

export type ContactFormData = z.infer<typeof contactSchema>;
