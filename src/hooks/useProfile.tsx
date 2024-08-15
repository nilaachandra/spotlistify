"use client"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUserProfile = async (id: string) => {
    const response = await axios.get(`/api/user/${id}`);
    if (response.status !== 200) {
        throw new Error('Failed to fetch user profile');
    }
    return response.data;
};

export const useUserProfile = (id: string) => {
    return useQuery({
        queryKey: ['userProfile'],
        queryFn: () => fetchUserProfile,
    })
};
