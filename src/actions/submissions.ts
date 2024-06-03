"use server";
import { ApiPaths } from "@/config/path";
import { createProposalSchema } from "@/containers/CreateSubmission/CreateProposalDrawer/schema";
import { ModalType } from "@/types/enums";
import axios from "axios";
import { unstable_noStore } from "next/cache";
import { z } from "zod";

type FetchSubmissionArgs = {
  generated_from?: ModalType;
};

unstable_noStore();

export const fetchSubmissions = async (query: FetchSubmissionArgs = {}) => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.FETCH_SUBMISSIONS,
      method: "GET",
      params: query || {},
    });

    console.log(data, "____DATA++______");

    const formattedData = data?.data?.map((item: any, i: number) => {
      return {
        ...item,
        serialNo: "Prompt # " + Number(i + 1),
      };
    });

    console.log(
      {
        formattedData,
        data: data?.data,
      },
      "DATA____COMPARISON______",
    );

    return {
      isSuccess: true,
      message: data?.message,
      data: formattedData,
    };
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};

export const createSubmission = async (
  data: z.infer<typeof createProposalSchema>,
) => {
  try {
    // Extraction
    const { templateVariables, ...rest } = data;
    // Declaration
    let variables: Record<string, any> = {};

    templateVariables?.forEach((item: Record<string, any>) => {
      const target = Object.keys(item)[0];

      // Appending Values to Object
      variables[target] = item?.[target];
    });

    const payload = {
      ...rest,
      variables,
    };
    console.log(payload, "PAYLOAD_____");

    const { data: axiosRes } = await axios({
      baseURL: process?.env?.BASE_URL,
      data: payload,
      url: ApiPaths.CREATE_SUBMISSION,
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
