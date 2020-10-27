import React from 'react';
import Input from '../../UI/Input';
import Select from '../../UI/Select';


type Props = {
    nextOfKinName: string;
    setNextOfKinName: (value: string) => void;
    nextOfKinAddress: string;
    setNextOfKinAddress: (value: string) => void;
    nextOfKinEmail: string;
    setNextOfKinEmail: (value: string) => void;
    nextOfKinPhonenumber: string;
    setNextOfKinPhonenumber: (value: string) => void;
    nextOfKinRelationship: string;
    setNextOfKinRelationship: (value: string) => void;
}


const NextOfKIn: React.FC<Props> = ({
    nextOfKinName,
    setNextOfKinName,
    nextOfKinAddress,
    setNextOfKinAddress,
    nextOfKinEmail,
    setNextOfKinEmail,
    nextOfKinPhonenumber,
    setNextOfKinPhonenumber,
    nextOfKinRelationship,
    setNextOfKinRelationship
}) => {

    const relationshipValues = [
        'father/mother',
        'brother/sister',
        'son/daughter',
        'aunt/uncle',
        'wife/husband'
    ]


    return (
        <div className="Identification">
            <div className="Flex3">
                <Input placeHolder="Next of Kin Name"
                    value={nextOfKinName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNextOfKinName(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Next of kin address"
                    value={nextOfKinAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNextOfKinAddress(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Next of kin email"
                    value={nextOfKinEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNextOfKinEmail(e.target.value)}
                    disabled={false} type="email" />
                <Input placeHolder="Next of kin phonenumber"
                    value={nextOfKinPhonenumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNextOfKinPhonenumber(e.target.value)}
                    disabled={false} type="text" />
                <Select value={nextOfKinRelationship} placeHolder="Relationship with next of kin" values={relationshipValues} blankValue="Select relationship"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setNextOfKinRelationship(e.target.value)}
                    disabled={false} />
            </div>
        </div>
    )
}

export default NextOfKIn;