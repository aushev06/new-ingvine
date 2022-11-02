import axios from 'axios';

export const BASE_URL = 'http://ingvine-food.ru';

axios.defaults.baseURL = BASE_URL;

export {
    axios
}
