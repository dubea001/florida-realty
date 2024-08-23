'use client';

import { cities, shuffleArray } from '@/lists';
import { fetchRealtyListings } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { listingProps } from '@/types';
import DisplayHouses from './DisplayHouses';
import SearchForm from './SearchForm';
import Loader from './Loader';

const RealtySearch: React.FC = () => {
    const [city, setCity] = useState<string | undefined>();
    const [sort, setSort] = useState<string>('RELEVANCE');
    const [priceMax, setPriceMax] = useState<string | undefined>();
    const [listing, setListing] = useState<listingProps[]>([]);
    const [displayListing, setDisplayListing] = useState<listingProps[]>([]);
    const [itemsToShow, setItemsToShow] = useState<number>(30);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadListing = async () => {
            setLoading(true);
            setError(null);
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
                setShowMore(shuffledListings.length > 30);
            } catch (error) {
                setError('failed to fetch data, please try again later.');
                console.error('failed to fetch data', error);
            } finally {
                setLoading(false);
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
        setLoading(true);
        setError(null);

        try {
            const result = await fetchRealtyListings({
                city,
                price_max: priceMax,
                sort,
                limit: '50',
            });
            setListing(result);
            setDisplayListing(result.slice(0, 30));
            setShowMore(result.length > 30);
        } catch (error) {
            setError('failed to fetch data, please try again later.');
            console.error('failed to fetch data', error);
        } finally {
            setLoading(false);
        }
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
        <section className='my-8'>
            <SearchForm
                handleSearch={handleSearch}
                city={city}
                setCity={setCity}
                sort={sort}
                setSort={setSort}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
            />
            {loading && <Loader />}
            {error && <div className=''>{error}</div>}
            <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 mx-8'>
                {filteredListing.map((item) => (
                    <DisplayHouses key={item.Identifier} item={item} />
                ))}
            </div>
            {showMore && !loading && (
                <div className='text-center'>
                    <Button
                        title='Load More'
                        style='text-primary border border-primary hover:border-none hover:text-white hover:bg-primary rounded px-12 md:px-20 py-2'
                        onClick={handleShowMore}
                    />
                </div>
            )}
        </section>
    );
};

export default RealtySearch;
