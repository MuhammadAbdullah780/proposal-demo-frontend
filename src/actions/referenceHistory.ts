"use server";
import { ApiPaths } from "@/config/path";
import { addReferenceFormSchema } from "@/containers/AddReference/schema";
import { editReferenceFormSchema } from "@/containers/References/table/EditReferenceDrawer/schema";
import axios from "axios";
import { revalidatePath } from "next/cache";
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

    await revalidatePath("/reference");

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

export const getReferences = async () => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.FETCH_REFERENCES,
      method: "GET",
    });

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};

export const updateReference = async ({
  rich_text,
  text,
  reference_type,
}: z.infer<typeof editReferenceFormSchema>) => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.UPDATE_REFERENCE(reference_type),
      method: "PATCH",
      data: { rich_text, text },
    });
    revalidatePath("/reference");

    return {
      isError: false,
      isSuccess: true,
      payload: data,
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

export const deleteReference = async (id: string) => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.DELETE_REFERENCE(id),
      method: "DELETE",
    });
    revalidatePath("/reference");

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};
