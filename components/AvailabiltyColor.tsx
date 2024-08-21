import { getAvailabiltyColor } from '@/lists';
import { AvailabilityStatusProps } from '@/types';
import React from 'react';

const AvailabiltyColor: React.FC<{ status: AvailabilityStatusProps }> = ({
    status,
}) => {
    const { color, text } = getAvailabiltyColor(status);
    return (
        <div className={`flex items-center space-x-2`}>
            <div className={`rounded-full w-4 h-4 ${color}`}></div>
            <span className='text-sm text-gray-500'>{text}</span>
        </div>
    );
};

export default AvailabiltyColor;
