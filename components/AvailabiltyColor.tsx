import { getAvailabiltyColor } from '@/lists';
import { AvailabilityStatusProps } from '@/types';
import clsx from 'clsx';
import React from 'react';

const AvailabiltyColor: React.FC<{ status: AvailabilityStatusProps }> = ({
    status,
}) => {
    const { color, text } = getAvailabiltyColor(status);
    return (
        <div className={`flex items-center space-x-2`}>
            <div className={clsx('rounded-full w-3 h-3', color)}></div>
            <span className='text-sm text-gray-500'>{text}</span>
        </div>
    );
};

export default AvailabiltyColor;
