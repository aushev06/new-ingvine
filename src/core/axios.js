import axios from 'axios';

export const BASE_URL = 'https://www.new.dostavka-jroo.com';

axios.defaults.baseURL = BASE_URL;

export {
    axios
}
