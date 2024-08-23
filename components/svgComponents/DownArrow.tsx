import * as React from 'react';
import { SVGProps } from 'react';
const DownArrow = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width={200}
        height={200}
        fill='none'
        viewBox='-12 -12 48 48'
        {...props}
        className='h-8 w-8'
    >
        <path
            stroke='#000'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={1.176}
            d='m7 10 5 5 5-5'
        />
    </svg>
);
export default DownArrow;
