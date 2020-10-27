import React from 'react';
import Input from '../../UI/Input';
import Select from '../../UI/Select';


type Props = {
    companyName: string;
    setCompanyName: (value: string) => void;
    employmentType: string
    setEmploymentType: (value: string) => void;
    occupation: string;
    setOccupation: (value: string) => void;

}


const Employment: React.FC<Props> = ({
    companyName,
    setCompanyName,
    employmentType,
    setEmploymentType,
    occupation,
    setOccupation
}) => {

    const employmentValues = [
        'Employee',
        'Self Employed',
        'Unemployed',
        'Retiree',
        'Student'
    ]


    return (
        <div className="Identification">
            <div className="Flex3">
                <Input placeHolder="Company Name"
                    value={companyName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                    disabled={false} type="text" />
                <Select value={employmentType} placeHolder="Employment Type" values={employmentValues} blankValue="Select employment type"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setEmploymentType(e.target.value)}
                    disabled={false} />
                <Input placeHolder="Occupation"
                    value={occupation}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOccupation(e.target.value)}
                    disabled={false} type="text" />
            </div>
        </div>
    )
}

export default Employment;