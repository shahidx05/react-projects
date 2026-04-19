import axios from 'axios'

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY
const TENOR_KEY = import.meta.env.VITE_TENOR_KEY

export const fetchPhotos = async (query, page = 1, per_page = 20) => {
    try {
        const res = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query, page, per_page },
            headers: {
                Authorization: `Client-ID ${UNSPLASH_KEY}`
            }
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching Unsplash data:', error);
        throw error;
    }
};
export const fetchVideos = async (query, per_page = 20) => {
    try {
        const res = await axios.get(`https://api.pexels.com/videos/search`, {
            params: { query, per_page },
            headers: {
                Authorization: PEXELS_KEY
            }
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching Pexels data:', error);
        throw error;
    }
};
export const fetchGif = async (query, limit = 20) => {
    try {
        const res = await axios.get(`https://tenor.googleapis.com/v2/search`, {
            params: { q: query, key: TENOR_KEY, limit },
        });
        return res.data;
    } catch (error) {
        console.error('Error fetching Tenor data:', error);
        throw error;
    }
};