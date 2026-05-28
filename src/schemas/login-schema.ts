import { z } from "zod";
import { emailSchema, passwordSchema } from "./auth.schemas";

export const loginSchema = z.object({
  email: emailSchema.shape.email,
  password: passwordSchema.shape.password,
})