'use client';

import { cities, sortOptions } from '@/lists';
import { fetchRealtyListings, fetchRealtyListingsById } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Button from './Button';

const RealtySearch = () => {
    const [city, setCity] = useState<string | undefined>();
    const [sort, setSort] = useState<string>('RELEVANCE');
    const [priceMax, setPriceMax] = useState<string | undefined>();
    const [listing, setListing] = useState<any[]>([]);

    useEffect(() => {
        const loadListing = async () => {
            try {
                const response = await fetchRealtyListings({
                    city: 'Cape Coral',
                });
                console.log(response);
                setListing(response);
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
        console.log(result);
        setListing(result);
    };

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
        </section>
    );
};

export default RealtySearch;
