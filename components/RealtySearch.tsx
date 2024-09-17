'use client';
import { cities, shuffleArray } from '@/lists';
import { fetchRealtyListings } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import Button from './Button';
import { listingProps } from '@/types';
import SearchForm from './SearchForm';
import Loader from './Loader';
import { useRouter, useSearchParams } from 'next/navigation';
import RealtySearchServer from './RealtySearchServer';

const RealtySearch: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [city, setCity] = useState<string | undefined>();
    const [sort, setSort] = useState<string>('RELEVANCE');
    const [priceMax, setPriceMax] = useState<string | undefined>();
    const [listing, setListing] = useState<listingProps[]>([]);
    const [displayListing, setDisplayListing] = useState<listingProps[]>([]);
    const [itemsToShow, setItemsToShow] = useState<number>(30);
    const [showMore, setShowMore] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleShowMore = () => {
        setDisplayListing(listing.slice(0, displayListing.length + 30));
        if (displayListing.length + 30 >= listing.length) {
            setShowMore(false);
        }
    };

    const handleSearch = async (ev: React.FormEvent) => {
        ev.preventDefault();
        const newSearchParams = new URLSearchParams();
        if (city) newSearchParams.set('city', city);
        if (sort) newSearchParams.set('sort', sort);
        if (priceMax) newSearchParams.set('priceMax', priceMax);
        router.push(`/?${newSearchParams.toString()}`);
        setLoading(true);
        setError(null);
    };

    useEffect(() => {
        setLoading(false);
    }, [searchParams]);

    return (
        <section className='my-8'>
            {loading && <Loader />}
            {error && <div className=''>{error}</div>}
            <RealtySearchServer
                searchParams={{
                    city: searchParams.get('city') || undefined,
                    sort: searchParams.get('sort') || undefined,
                    priceMax: searchParams.get('priceMax') || undefined,
                }}
            />
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
