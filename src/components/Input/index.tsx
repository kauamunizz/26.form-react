import React, { InputHTMLAttributes } from 'react';
import './styles.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default ({ label, error, ...rest }: Props) => {

    return (
        <div className="label-input">
            <label>
                {label}
                <input {...rest} />
            </label>
            {error && <div className='error'> {error} </div>}
        </div>
    )
}