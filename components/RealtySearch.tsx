'use client';

import { cities, shuffleArray, sortOptions } from '@/lists';
import { fetchRealtyListings } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { listingProps } from '@/types';
import DisplayHouses from './DisplayHouses';

const RealtySearch: React.FC = () => {
    const [city, setCity] = useState<string | undefined>();
    const [sort, setSort] = useState<string>('RELEVANCE');
    const [priceMax, setPriceMax] = useState<string | undefined>();
    const [listing, setListing] = useState<listingProps[]>([]);
    // const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const loadListing = async () => {
            try {
                const allListings: listingProps[] = new Array();
                for (const city of cities) {
                    const response = await fetchRealtyListings({ city });
                    if (response) {
                        allListings.push(...response);
                    }
                }
                const shuffledListings = shuffleArray(allListings);
                setListing(shuffledListings.slice(0, 10));
                console.log(shuffledListings.slice(0, 10));
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };
        loadListing();
    }, []);

    const handleSearch = async (ev: React.FormEvent) => {
        ev.preventDefault();

        const result = await fetchRealtyListings({
            city,
            price_max: priceMax,
            sort,
            limit: '50',
        });
        // console.log(result);
        setListing(result.slice(0, 10));
    };

    const seenIdentifiers = new Set<string>();

    const filteredListing = listing.filter((item) => {
        if (item.Identifier && !seenIdentifiers.has(item.Identifier)) {
            seenIdentifiers.add(item.Identifier);
            return true;
        }
        return false;
    });

    // if (isLoading) {
    //     return <div className='text-2xl font-bold'>Loading Listing...</div>;
    // }

    return (
        <section className='mt-12'>
            <form
                onSubmit={handleSearch}
                className='gap-y-4 gap-x-2 px-8 shadow-2xl shadow-primary flex flex-wrap items-center justify-evenly w-4/5 md:w-3/5 mx-auto py-8 rounded'
            >
                <div className='w-full md:w-[30%]'>
                    <label>City:</label> <br />
                    <select
                        className='w-full p-2 rounded'
                        value={city || ''}
                        onChange={(e) => setCity(e.target.value || undefined)}
                    >
                        <option value=''>All Cities</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='w-full md:w-[30%]'>
                    <label>Sort By:</label> <br />
                    <select
                        className='w-full p-2 rounded'
                        value={sort}
                        onChange={(e) => setSort(e.target.value)}
                    >
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='w-full md:w-[30%]'>
                    <label>Max Price (USD):</label> <br />
                    <input
                        type='number'
                        value={priceMax || ''}
                        onChange={(e) =>
                            setPriceMax(e.target.value || undefined)
                        }
                        className='w-full p-2 rounded'
                        placeholder='250,000'
                    />
                </div>

                <Button
                    title='search'
                    style='bg-primary hover:bg-secondary rounded text-white px-20 py-2'
                    type='submit'
                />
            </form>
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 mx-8'>
                {filteredListing.map((item) => (
                    <DisplayHouses key={item.Identifier} item={item} />
                ))}
            </div>
        </section>
    );
};

export default RealtySearch;
