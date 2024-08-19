import { DisplayHouseProps } from '@/types';
import Image from 'next/image';
import React from 'react';

const DisplayHouses: React.FC<DisplayHouseProps> = ({ item }) => {
    return (
        <div className=''>
            {item.ItemOffered?.Photo && item.ItemOffered.Photo.length > 0 ? (
                <Image
                    src={item.ItemOffered?.Photo[0].Url ?? '/placeholder.webp'}
                    alt={item.ItemOffered?.Address?.Name || 'Listing Image'}
                    width={200}
                    height={200}
                />
            ) : (
                <p className=''>No image available</p>
            )}
            <p className=''>
                {item.PriceCurrency} {item.Price} {item.Identifier}
            </p>
        </div>
    );
};

export default DisplayHouses;
