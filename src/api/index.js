import axios from "axios";

const URL = process.env.REACT_APP_RESTAURANTS_URL;

export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-host': process.env.REACT_APP_RAPIDAPI_HOST,
                'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
            }
        });

        return data;
    } catch(e) {
        console.log(e);
    }
}