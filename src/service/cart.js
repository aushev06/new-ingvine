import {axios} from "../core/axios";

export const addToCart = async (token, foodPropertyId, quantity) => {
    const { data } = await axios.post('/cart/')
}
