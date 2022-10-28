import {axios} from "../core/axios";

export const getFoods = async () => {
    const { data } = await axios.get('/api/foods');

    return data;
}
