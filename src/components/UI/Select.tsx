import React from 'react';

type Props = {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    disabled: boolean;
    placeHolder: string;
    values: string[];
    blankValue: string;
}

const Select: React.FC<Props> = ({
    onChange,
    value,
    disabled,
    placeHolder,
    values,
    blankValue
}) => (
        <div>
            <p>{placeHolder}</p>
            <select value={value} onChange={onChange} disabled={disabled} >
                <option value="" >{blankValue}</option>
                {values.map(value => <option value={value} key={value}>{value}</option>)}
            </select>
        </div>
    )

export default Select;