import React from 'react';
import Button from './Button';
import { cities, sortOptions } from '@/lists';
import { SearchFormProps } from '@/types';

const SearchForm: React.FC<SearchFormProps> = ({
    handleSearch,
    city,
    setCity,
    sort,
    setSort,
    priceMax,
    setPriceMax,
}) => {
    return (
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
                    onChange={(e) => setPriceMax(e.target.value || undefined)}
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
    );
};

export default SearchForm;
