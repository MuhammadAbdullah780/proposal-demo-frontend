"use server";
import { ApiPaths } from "@/config/path";
import { addReferenceFormSchema } from "@/containers/AddReference/schema";
import axios from "axios";
import { z } from "zod";

export const createReferenceHistory = async (
  data: z.infer<typeof addReferenceFormSchema>,
): Promise<any> => {
  try {
    const { data: axiosRes } = await axios({
      baseURL: process.env.BASE_URL,
      data,
      url: ApiPaths.ADD_REFERENCE,
      method: "POST",
    });

    console.log(axiosRes, "RES___");

    return {
      isError: false,
      isSuccess: true,
      payload: axiosRes,
    };
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      isError: true,
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};
