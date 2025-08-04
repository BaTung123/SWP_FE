import { instance } from "../instance";

export const GetAllBloodBagWithBloodType = async (blood) => {
  try {
    const response = await instance.get(`/BloodBag/blood-type/${blood}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy bloodStorages:", error.response?.data || error.message);
    throw error;
  }
}

export const GetBloodBagById = async (id) => {
  try {
    const response = await instance.get(`/BloodBag/${id}`);
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy GetBloodBagById:", error.response?.data || error.message);
    throw error;
  }
}

export const UpdateBloodBag = async (data) => {
  try {
    const response = await instance.put("/BloodBag", data);
    return response.data;
  } catch (error) {
    console.error("Lỗi lấy UpdateBloodBag:", error.response?.data || error.message);
    throw error;
  }
}