"use server";

import { ApiPaths } from "@/config/path";
import axios from "axios";
import { revalidatePath } from "next/cache";

type CreatePromptTemplateArgs = {
  template: string;
  title: string;
  variables: string[];
  templateInRichText: string;
};

export const createPromptTemplate = async (
  data: CreatePromptTemplateArgs,
): Promise<any> => {
  try {
    const { data: axiosRes } = await axios({
      baseURL: process.env.BASE_URL,
      data,
      url: ApiPaths.CREATE_PROMPT_TEMPLATE,
      method: "POST",
    });

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

export const fetchPrompts = async () => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.FETCH_PROMPTS,
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

export const deletePrompt = async (id: string) => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.DELETE_PROMPT(id),
      method: "DELETE",
    });

    revalidatePath("/prompts");

    return data;
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};
