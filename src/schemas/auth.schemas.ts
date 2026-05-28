import { z } from "zod";

export const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "O email é obrigatório.")
    .email("E-mail inválido")
    .toLowerCase(),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .trim()
    .min(1, "A senha é obrigatória.")
    .min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export const telephoneSchema = z.object({
  telephone: z
    .string()
    .trim()
    .min(1, "O telefone é obrigatório.")
    .regex(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      "Formato inválido. Use o padrão (11) 99999-9999",
    ),
});

export const namePeopleSchema = z.object({
  namePeople: z.string().trim().min(1, "O nome é obrigatório."),
});

export const nameStoreSchema = z.object({
  nameStore: z.string().trim().min(1, "O nome é obrigatório."),
});
