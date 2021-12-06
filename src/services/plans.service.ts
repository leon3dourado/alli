/* eslint-disable no-useless-catch */
import { IPlataformService, IPlansService } from "../models/PhonePlansModel";
import { axiosGetApi } from "../utils/useAxios";

export const searchPlataforms = async () => {
  try {
    return await axiosGetApi<IPlataformService>(`/plataformas`);
  } catch (error) {
    throw error;
  }
};

export const searchPhonePlans = async (sku: string) => {
  try {
    return await axiosGetApi<IPlansService>(`/planos/${sku}`);
  } catch (error) {
    throw error;
  }
};
