import { fetchRealtyOptions } from '@/types';
import axios, { AxiosRequestConfig } from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export const fetchRealtyListings = async (options: fetchRealtyOptions = {}) => {
    const {
        city,
        price_max,
        limit = '50',
        offset = '0',
        sort = 'RELEVANCE',
    } = options;
    try {
        let queryParams = new URLSearchParams();

        if (city) queryParams.append('city', city);
        if (price_max) queryParams.append('price_max', price_max);
        queryParams.append('limit', limit);
        queryParams.append('offset', offset);
        queryParams.append('sort', sort);

        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${baseUrl}?${queryParams.toString()}`,
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'florida-realty-api1.p.rapidapi.com',
            },
        };

        const response = await axios.request(options);
        return response;
    } catch (error) {
        console.error('Error fetching realty listings:', error);
        return null;
    }
};

export const fetchRealtyListingsById = async (id: string) => {
    try {
        const options: AxiosRequestConfig = {
            method: 'GET',
            url: `${baseUrl}/${id}`,
            headers: {
                'x-rapidapi-key': apiKey,
                'x-rapidapi-host': 'florida-realty-api1.p.rapidapi.com',
            },
        };
        const response = await axios.request(options)
        return response
    } catch (error) {
       console.error('Error fetching realty details:', error);
    return null;
    }
};
