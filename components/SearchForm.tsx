import React from 'react';
import Button from './Button';
import { cities, sortOptions } from '@/lists';
import { SearchFormProps } from '@/types';
import SearchIcon from './svgComponents/SearchIcon';
import DownArrow from './svgComponents/DownArrow';

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
            className='gap-y-4 gap-x-2 p-4 shadow-2xl shadow-primary mx-8 bg-content flex flex-wrap items-end justify-evenly md:w-4/5 md:mx-auto rounded'
        >
            <div className='relative w-full md:w-[30%]'>
                <label className='text-sm font-semibold'>City:</label> <br />
                <select
                    className='w-full p-1 appearance-none leading-tight outline-0 outline-secondary border border-primary rounded text-sm text-gray-500'
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
                <div className='pointer-events-none absolute  right-0 top-[40%] h-fit w-fit text-gray-700'>
                    <DownArrow />
                </div>
            </div>

            <div className='relative w-full md:w-[30%]'>
                <label className='text-sm font-semibold'>Sort By:</label> <br />
                <select
                    className='w-full p-1 appearance-none leading-tight outline-0 outline-secondary border border-primary rounded text-sm text-gray-500'
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className='pointer-events-none absolute  right-0 top-[40%] h-fit w-fit text-gray-700'>
                    <DownArrow />
                </div>
            </div>

            <div className='w-full md:w-[30%]'>
                <label className='text-sm font-semibold'>
                    Max Price (USD):
                </label>{' '}
                <br />
                <input
                    type='number'
                    value={priceMax || ''}
                    onChange={(e) => setPriceMax(e.target.value || undefined)}
                    className='w-full p-1 outline-0 appearance-none leading-tight outline-secondary border border-primary rounded text-sm text-gray-500'
                    placeholder='250,000'
                />
            </div>
            <div
                title='search'
                className='mt-2 md:mt-0 w-full md:w-auto md:p-2 md:bg-primary md:hover:bg-secondary md:rounded-full cursor-pointer transition-all duration-300'
            >
                <SearchIcon type='submit' />
                <Button
                    title='search'
                    style='bg-primary hover:bg-secondary rounded text-white py-1 w-full md:hidden'
                    type='submit'
                />
            </div>
        </form>
    );
};

export default SearchForm;
