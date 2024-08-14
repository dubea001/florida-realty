import Button from '../Button';

const Header = () => {
    return (
        <header className='relative h-[80vh] w-full overflow-hidden flex items-center justify-center'>
            <video
                autoPlay
                muted
                loop
                poster='/background.png'
                className='absolute top-1/2 left-1/2 w-full h-full object-cover -z-1 transform -translate-x-1/2 -translate-y-1/2'
            >
                <source src='/house-video.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div className='absolute inset-0 bg-black opacity-80'></div>
            <div className='relative z-10 text-white text-start md:text-center p-4'>
                <h1 className='text-4xl md:text-6xl font-bold leading-12 tracking-wider'>
                    Find Your Dream Home <br /> In Florida
                </h1>
                <p className='text-lg md:text-2xl mt-4'>
                    We get your dream apartment here
                </p>
                <Button
                    title='Get Started'
                    style='mt-8 px-6 text-lg md:px-8 py-2 md:py-3 rounded bg-primary tracking-wider md:text-xl hover:bg-secondary'
                />
            </div>
        </header>
    );
};

export default Header;
