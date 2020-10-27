import React from 'react';
import Input from '../../UI/Input';
import './BankDetails.css';


type Props = {
    bankAccountNumber: string;
    setBankAccountNumber: (value: string) => void;
    bankAccountName: string;
    setBankAccountName: (value: string) => void;
    bankName: string;
    setBankName: (value: string) => void;
    bankCode: string;
    setBankCode: (value: string) => void;
    bvn: string;
    setBvn: (value: string) => void;
}


const BankDetails: React.FC<Props> = ({
    bankAccountNumber,
    setBankAccountNumber,
    bankAccountName,
    setBankAccountName,
    bankName,
    setBankName,
    bankCode,
    setBankCode,
    bvn,
    setBvn
}) => {

    return (
        <div className="BankDetails">
            <div className="Flex3">
                <Input placeHolder="Bank Account Number"
                    value={bankAccountNumber}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccountNumber(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Bank Account Name"
                    value={bankAccountName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccountName(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Bank Name"
                    value={bankName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankName(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Bank Code"
                    value={bankCode}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankCode(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="BVN"
                    value={bvn}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBvn(e.target.value)}
                    disabled={false} type="text" />
            </div>
        </div>
    )
}

export default BankDetails;