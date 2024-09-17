import { MoonLoader } from 'react-spinners';
const Loader = () => {
    return (
        <MoonLoader
            color='#606c38'
            size={50}
            speedMultiplier={0.5}
            className='border border-red-700'
        />
    );
};

export default Loader;
