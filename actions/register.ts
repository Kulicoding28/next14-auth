"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  //   console.log(values);
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields" };
  }
  return { succes: "Email sent!" };
};
