import { DisplayHouseProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { formatNumber } from '@/utils/formatNumber';
import AvailabiltyColor from './AvailabiltyColor';

const DisplayHouses: React.FC<DisplayHouseProps> = ({ item }) => {
    return (
        <div className='flex flex-col rounded-xl overflow-hidden shadow-2xl relative bg-content'>
            <Link
                href={`details/${item.Identifier}`}
                className='overflow-hidden'
            >
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
                        className='w-full h-[22rem] object-cover hover:scale-110 transition-all duration-300'
                    />
                ) : (
                    <Image
                        src='/fallback-image.jpg'
                        alt='default image'
                        width={500}
                        height={500}
                    />
                )}
            </Link>
            <p className='absolute top-0 bottom-0 z-50 ml-2 mt-2 text-secondary font-extralight bg-opacity-60 rounded bg-content text-xs h-fit px-2 py-1'>{`brokered by ${item.OfferedBy?.WorksFor?.Name}`}</p>
            <div className='m-4 flex'>
                <div className='w-[60%]'>
                    <p className='md:text-2xl text-xl font-bold'>
                        {formatNumber(Number(item.Price), {
                            currency: item.PriceCurrency,
                        })}
                    </p>
                    <p className='font-medium text-gray-700'>
                        {item.ItemOffered?.Name?.replace(/,/g, ' ').replace(
                            /null/g,
                            'sqft'
                        )}{' '}
                    </p>
                    <p className='text-sm text-gray-500'>
                        {item.ItemOffered?.Address?.StreetAddress}
                    </p>
                    <p className='text-sm text-gray-500'>{`${item.ItemOffered?.Address?.AddressLocality}, ${item.ItemOffered?.Address?.AddressRegion}`}</p>
                </div>
                <div className='flex items-end justify-between w-[40%] flex-col'>
                    <AvailabiltyColor status={item.Availability} />
                    <Link
                        href={`details/${item.Identifier}`}
                        className='rounded-full tracking-wide font-medium text-primary border border-primary hover:text-white px-3 py-1 md:px-4 md:py-2 hover:bg-primary hover:border-none transition duration-200'
                    >
                        details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayHouses;
