import { ButtonProps } from '@/types';
import React from 'react';

const Button: React.FC<ButtonProps> = ({
    title,
    style = '',
    onClick,
    type,
}) => {
    return (
        <button className={`font-medium transition duration-200 ${style}`}>
            {title}
        </button>
    );
};

export default Button;
