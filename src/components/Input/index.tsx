import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string
}

export default ({ label, error, ...rest }: Props) => {

    return (
        <>
            <label>
                {label}
                <input {...rest} />
            </label>
            {error && <div> {error} </div>}
        </>
    )
}