"use server";

import { ApiPaths } from "@/config/path";
import axios from "axios";
import { z } from "zod";
import { createProposalSchema } from "@/containers/CreateSubmission/CreateProposalDrawer/schema";

export const generateProposal = async (
  data: z.infer<typeof createProposalSchema>,
) => {
  try {
    const { data: axiosRes } = await axios({
      baseURL: process.env.BASE_URL,
      data,
      url: ApiPaths.CREATE_PROPOSAL,
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
