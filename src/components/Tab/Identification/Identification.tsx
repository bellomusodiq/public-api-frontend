import React from 'react';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import './Identification.css';


type Props = {
    identityType: string;
    setIdentityType: (value: string) => void;
    identityNumber: string;
    setIdentityNumber: (value: string) => void;
    expiresIn: string;
    setExpiresIn: (value: string) => void;
    politicallyExposed: string;
    setPoliticallyExposed: (value: string) => void;
}


const Identification: React.FC<Props> = ({
    identityType,
    setIdentityType,
    identityNumber,
    setIdentityNumber,
    expiresIn,
    setExpiresIn,
    politicallyExposed,
    setPoliticallyExposed
}) => {

    const identityValues = [
        'National Identity'
    ]
    const politicallyValues = [
        'yes',
        'no'
    ]

    return (
        <div className="Identification">
            <div className="Flex3">
                <Select value={identityType} placeHolder="Identity Type" values={identityValues} blankValue="Select type"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setIdentityType(e.target.value)}
                    disabled={false} />
                <Input placeHolder="Identity Number"
                    value={identityNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIdentityNumber(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Expires In"
                    value={expiresIn}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setExpiresIn(e.target.value)}
                    disabled={false} type="date" />
                <Select value={politicallyExposed} placeHolder="Politically Exposed" values={politicallyValues} blankValue="Select value"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPoliticallyExposed(e.target.value)}
                    disabled={false} />
            </div>
        </div>
    )
}

export default Identification;