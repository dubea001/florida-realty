import { DisplayHouseProps } from '@/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { formatNumber } from '@/utils/formatNumber';
import AvailabiltyColor from './AvailabiltyColor';

const DisplayHouses: React.FC<DisplayHouseProps> = ({ item }) => {
    return (
        <div className='flex flex-col rounded-xl overflow-hidden shadow-2xl relative'>
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
                        className='w-full h-[22rem] object-cover'
                    />
                ) : (
                    <p className=''>No image available</p>
                )}
            </Link>
            <p className='absolute top-0 bottom-0 z-50 ml-2 mt-2 text-secondary font-extralight bg-opacity-60 rounded bg-content text-xs h-fit px-2 py-1'>{`brokered by ${item.OfferedBy?.WorksFor?.Name}`}</p>
            <div className='m-4 flex'>
                <div className='w-[60%]'>
                    <p className='text-2xl font-bold'>
                        {formatNumber(Number(item.Price), {
                            currency: item.PriceCurrency,
                        })}
                    </p>
                    {/* <p className=''>{item.ItemOffered?.Name}</p> */}
                    <p className='font-semibold'>
                        {item.ItemOffered?.Name?.replace(/,/g, ' ').replace(
                            /null/g,
                            'sqft'
                        )}{' '}
                    </p>
                    <p className='text-sm'>
                        {item.ItemOffered?.Address?.StreetAddress}
                    </p>
                    <p className='text-sm'>{`${item.ItemOffered?.Address?.AddressLocality}, ${item.ItemOffered?.Address?.AddressRegion}`}</p>
                </div>
                <div className='flex items-end justify-between w-[40%] flex-col'>
                    <AvailabiltyColor status={item.Availability} />
                    <Link
                        href={`details/${item.Identifier}`}
                        className='rounded-full font-semibold border border-primary hover:text-white px-4 py-2 hover:bg-primary hover:border-none transition duration-200'
                    >
                        more details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayHouses;
