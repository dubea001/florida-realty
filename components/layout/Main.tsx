import { SearchFormProps } from '@/types';
import RealtySearch from '../RealtySearch';
import SearchForm from '../SearchForm';

const Main: React.FC<SearchFormProps> = ({
    handleSearch,
    city,
    setCity,
    sort,
    setSort,
    priceMax,
    setPriceMax,
}) => {
    return (
        <main>
            <SearchForm
                handleSearch={handleSearch}
                city={city}
                setCity={setCity}
                sort={sort}
                setSort={setSort}
                priceMax={priceMax}
                setPriceMax={setPriceMax}
            />
            <RealtySearch />
        </main>
    );
};

export default Main;
