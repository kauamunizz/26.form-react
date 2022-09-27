import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export default ({ label, ...rest }: Props) => {
    
    return (
        <label>
            {label}
            <input {...rest} />
        </label>
    )
}