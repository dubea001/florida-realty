import * as React from 'react';
import { SVGProps } from 'react';
const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={103}
        height={103}
        fill='#fff'
        stroke='#fff'
        viewBox='0 0 24 24'
        {...props}
        className='hidden md:block w-4 h-fit'
    >
        <path d='M10.035 18.069a7.981 7.981 0 0 0 3.938-1.035l3.332 3.332a2.164 2.164 0 0 0 3.061-3.061l-3.332-3.332a8.032 8.032 0 0 0-12.68-9.619 8.034 8.034 0 0 0 5.681 13.715ZM5.768 5.768A6.033 6.033 0 1 1 4 10.035a5.989 5.989 0 0 1 1.768-4.267Z' />
    </svg>
);
export default SearchIcon;
