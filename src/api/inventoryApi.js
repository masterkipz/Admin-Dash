import axios from "axios";

const inventoryApi = axios.create({
    baseURL: "http://localhost:5000"
})

export const getInventory = async (req, res) => {
    const response = await inventoryApi.get("/inventory");
    return response.data
}

export const addInventory = async (item) => {
    return await inventoryApi.post("/inventory", item);
}

export const updateInventory = async (item) => {
    return await inventoryApi.patch(`/inventory/${item.id}`, item);
}

export const deleteInventory = async (id) => {
    return await inventoryApi.delete(`/inventory/${id}`, id);
}

export default inventoryApi

