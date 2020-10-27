import React from 'react';
import './Input.css';

type Props = {
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    disabled: boolean;
    placeHolder: string;
}

const Input: React.FC<Props> = ({
    type,
    onChange,
    value,
    disabled,
    placeHolder,
}) => (
        <div>
            <p>{placeHolder}</p>
            <input type={type} placeholder={placeHolder} required
                value={value} onChange={onChange} disabled={disabled} />
        </div>
    )

export default Input;