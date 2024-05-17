import { ApiPaths } from "@/config/path";
import { ModalType } from "@/types/enums";
import axios from "axios";

type FetchSubmissionArgs = {
  generated_from?: ModalType;
};

export const fetchSubmissions = async (query: FetchSubmissionArgs = {}) => {
  try {
    const { data } = await axios({
      baseURL: process.env.BASE_URL,
      url: ApiPaths.FETCH_SUBMISSIONS,
      method: "GET",
      params: query || {},
    });

    console.log(data, "____DATA++______");

    return {
      isSuccess: true,
      message: data?.message,
      data: data?.data,
    };
  } catch (error: any) {
    console.log(error?.response?.data?.message, "ERROR__MESSAGE____");
    return {
      message: error?.response?.data?.message,
      isSuccess: false,
    };
  }
};
