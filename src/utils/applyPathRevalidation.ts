"use server";

import { revalidatePath } from "next/cache";

export const applyPathRevalidation = async (arg: string) => {
  revalidatePath(arg);
};
