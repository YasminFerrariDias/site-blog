import { z } from "zod";

import {
  emailSchema,
  namePeopleSchema,
  nameStoreSchema,
  passwordSchema,
  telephoneSchema,
} from "./auth.schemas";

export const registerSchema = z
  .object({
    namePeople: namePeopleSchema.shape.namePeople,
    email: emailSchema.shape.email,
    telephone: telephoneSchema.shape.telephone,
    nameStore: nameStoreSchema.shape.nameStore,
    password: passwordSchema.shape.password,
    confirmPassword: z
      .string()
      .trim()
      .min(1, "A confirmação de senha é obrigatória"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });
