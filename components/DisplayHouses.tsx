import { DisplayHouseProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const DisplayHouses: React.FC<DisplayHouseProps> = ({ item }) => {
    return (
        <div className='border border-secondary flex flex-col md:flex-row p-4 m-4 gap-4'>
            <div className='border border-primary md:w-1/2 overflow-hidden'>
                {item.ItemOffered?.Photo &&
                item.ItemOffered.Photo.length > 0 ? (
                    <Image
                        src={
                            item.ItemOffered?.Photo[0].Url ??
                            '/placeholder.webp'
                        }
                        alt={item.ItemOffered?.Address?.Name || 'Listing Image'}
                        width={500}
                        height={500}
                        className='w-full h-[22rem] object-cover'
                    />
                ) : (
                    <p className=''>No image available</p>
                )}
            </div>
            <div className='border border-primary w-1/2'>
                <p className=''>${item.Price}</p>
                <p className=''>{item.ItemOffered?.Name}</p>
                <p className=''>{item.ItemOffered?.Address?.Name}</p>
                <Link
                    href={`details/${item.Identifier}`}
                    className='rounded-full border border-primary px-6 py-2 hover:bg-primary hover:border-none'
                >
                    details
                </Link>
            </div>
        </div>
    );
};

export default DisplayHouses;
