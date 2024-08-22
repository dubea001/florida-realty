'use client';

import { cities, shuffleArray, sortOptions } from '@/lists';
import { fetchRealtyListings } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { listingProps } from '@/types';
import DisplayHouses from './DisplayHouses';
import SearchForm from './SearchForm';

const RealtySearch: React.FC = () => {
    const [city, setCity] = useState<string | undefined>();
    const [sort, setSort] = useState<string>('RELEVANCE');
    const [priceMax, setPriceMax] = useState<string | undefined>();
    const [listing, setListing] = useState<listingProps[]>([]);
    const [displayListing, setDisplayListing] = useState<listingProps[]>([]);
    const [itemsToShow, setItemsToShow] = useState<number>(30);
    const [showMore, setShowMore] = useState<boolean>(false);

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
                setListing(shuffledListings);
                setDisplayListing(shuffledListings.slice(0, 30));
            } catch (error) {
                console.error('failed to fetch data', error);
            }
        };
        loadListing();
    }, []);

    const handleShowMore = () => {
        setDisplayListing(listing.slice(0, displayListing.length + 30));
        if (displayListing.length + 30 >= listing.length) {
            setShowMore(false);
        }
    };

    const handleSearch = async (ev: React.FormEvent) => {
        ev.preventDefault();

        const result = await fetchRealtyListings({
            city,
            price_max: priceMax,
            sort,
            limit: '50',
        });
        setListing(result);
        setDisplayListing(result.slice(0, 20));
        setShowMore(result.length > 20);
    };

    const seenIdentifiers = new Set<string>();

    const filteredListing = displayListing.filter((item) => {
        if (item.Identifier && !seenIdentifiers.has(item.Identifier)) {
            seenIdentifiers.add(item.Identifier);
            return true;
        }
        return false;
    });

    return (
        <section className='mt-12'>
            <SearchForm
                handleSearch={handleSearch}
                city={city}
                setCity={setCity}
                sort={sort}
                setSort={setSort}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
            />
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 mx-8'>
                {filteredListing.map((item) => (
                    <DisplayHouses key={item.Identifier} item={item} />
                ))}
            </div>
            {showMore && (
                <div className='border border-red-600 text-center'>
                    <Button
                        title='Load More'
                        style='bg-primary hover:bg-secondary rounded text-white px-20 py-2'
                        onClick={handleShowMore}
                    />
                </div>
            )}
        </section>
    );
};

export default RealtySearch;
