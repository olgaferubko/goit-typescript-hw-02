import axios from "axios";
import { Response } from "../types/Response";

const fetchResult = async (
  query: string,
  page = 1
): Promise<Response> => {
  const { data } = await axios.get<Record<string, unknown>>("https://api.unsplash.com/search/photos", {
    params: {
      client_id: "-Q-wE1scsMXPcndDPLLiqgiV_o61rH00ryp0mPYSc3M",
      query,
      page,
    },
  });
  return data;
};
export default fetchResult;