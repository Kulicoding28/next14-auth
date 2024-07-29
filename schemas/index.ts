import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is requiered",
  }),
  password: z.string().min(1, { message: "Password is requiered" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is requiered",
  }),
  password: z.string().min(6, { message: "Minimun 6 characters required" }),
  name: z.string().min(1, {
    message: "Name is requiered",
  }),
});
