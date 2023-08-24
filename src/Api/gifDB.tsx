import axios from "axios";

const gifDB = axios.create({
    baseURL:"https://api.giphy.com/v1/gifs/search/",
    params:{
        api_key:"4B8Qd0yc90j2606f8PH7hED7CddYsBwZ",
        limit:10
    }
});


export default gifDB;