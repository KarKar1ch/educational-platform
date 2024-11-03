
import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { 
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
    return (
        <button 
            className={`w-full h-[30px] bg-[#3E63F5] text-white rounded-3xl ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;