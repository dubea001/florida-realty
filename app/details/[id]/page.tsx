'use client';
import { detailsPageProps } from '@/types';
import { fetchRealtyListingsById } from '@/utils/api';
import { useEffect, useState } from 'react';

const houseDetailsPage = ({ params }: detailsPageProps) => {
    const [houseDetails, setHouseDetails] = useState<any | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const listingDetails = await fetchRealtyListingsById(
                    params.identifier
                );
                setHouseDetails(listingDetails);
                console.log(listingDetails);
            } catch (error) {
                console.error('failed to fetch details', error);
            }
        };
        fetchDetails();
    }, []);

    return (
        <div>
            <h1 className=''>House Details</h1>
            <p className=''>Identifier: {params.identifier}</p>
        </div>
    );
};

export default houseDetailsPage;
