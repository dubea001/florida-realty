import { cities, shuffleArray } from '@/lists';
import { listingProps } from '@/types';
import { fetchRealtyListings } from '@/utils/api';
import DisplayHouses from './DisplayHouses';
import React from 'react';

async function getListings(searchParams: {
    city?: string;
    priceMax?: string;
    sort?: string;
}) {
    const { city, priceMax, sort } = searchParams;
    if (city || priceMax || sort) {
        return await fetchRealtyListings(searchParams);
    }

    const allListings: listingProps[] = [];
    for (const city of cities) {
        const response = await fetchRealtyListings({ city });
        if (response) {
            allListings.push(...response);
        }
    }
    return shuffleArray(allListings);
}

export default async function RealtySearchServer({
    searchParams,
}: {
    searchParams: { city?: string; priceMax?: string; sort?: string };
}) {
    const listing: listingProps[] = await getListings(searchParams);
    const displayListing = listing.slice(0, 30);

    const seenIdentifiers = new Set<string>();

    const filteredListing = displayListing.filter((item: listingProps) => {
        if (item.Identifier && !seenIdentifiers.has(item.Identifier)) {
            seenIdentifiers.add(item.Identifier);
            return true;
        }
        return false;
    });

    return (
        <div className='my-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-8 md:gap-y-4 mx-8'>
            {filteredListing.map((item: listingProps) => (
                <DisplayHouses key={item.Identifier} item={item} />
            ))}
        </div>
    );
}
