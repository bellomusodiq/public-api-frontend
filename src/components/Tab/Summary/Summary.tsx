import React from 'react';
import Feedback from '../../UI/Feedback';
import KeyValue from './KeyValue';
import './Summary.css';

type Props = {
    companyName: string;
    employmentType: string;
    occupation: string;
    nextOfKinName: string;
    nextOfKinAddress: string;
    nextOfKinEmail: string;
    nextOfKinPhonenumber: string;
    nextOfKinRelationship: string;
    identityType: string;
    identityNumber: string;
    expiresIn: string;
    politicallyExposed: string;
    bankAccountNumber: string;
    bankAccountName: string;
    bankName: string;
    bankCode: string;
    bvn: string;
    title: string;
    surname: string;
    firstName: string;
    otherNames: string;
    dateOfBirth: string;
    gender: string;
    phone: string;
    emailAddress: string;
    homePhone: string;
    address: string;
    city: string;
    country: string;
    origin: string;
    lga: string;
    nationality: string;
    showFeedback: boolean;
    feedbackMessage: string;
    error: boolean;
    submitSignup: () => void;
}

const Summary: React.FC<Props> = ({
    companyName,
    employmentType,
    occupation,
    nextOfKinName,
    nextOfKinAddress,
    nextOfKinEmail,
    nextOfKinPhonenumber,
    nextOfKinRelationship,
    identityNumber,
    identityType,
    expiresIn,
    politicallyExposed,
    bankAccountName,
    bankAccountNumber,
    bankCode,
    bankName,
    bvn,
    title,
    surname,
    firstName,
    otherNames,
    dateOfBirth,
    gender,
    phone,
    emailAddress,
    homePhone,
    address,
    city,
    country,
    origin,
    lga,
    nationality,
    showFeedback,
    feedbackMessage,
    error,
    submitSignup

}) => {

    return (
        <div className="Summary">
            <Feedback show={showFeedback} message={feedbackMessage} error={error} />
            <h3>PERSONAL</h3>
            <KeyValue key_="titile">{title}</KeyValue>
            <KeyValue key_="surname">{surname}</KeyValue>
            <KeyValue key_="first name">{firstName}</KeyValue>
            <KeyValue key_="other names">{otherNames}</KeyValue>
            <KeyValue key_="date of birth">{dateOfBirth}</KeyValue>
            <KeyValue key_="gender">{gender}</KeyValue>
            <KeyValue key_="phone">{phone}</KeyValue>
            <KeyValue key_="email address">{emailAddress}</KeyValue>
            <KeyValue key_="home phone">{homePhone}</KeyValue>
            <KeyValue key_="address">{address}</KeyValue>
            <KeyValue key_="city">{city}</KeyValue>
            <KeyValue key_="country">{country}</KeyValue>
            <KeyValue key_="origin">{origin}</KeyValue>
            <KeyValue key_="local government area">{lga}</KeyValue>
            <KeyValue key_="nationality">{nationality}</KeyValue>
            <hr />
            <h3>BANK DETAILS</h3>
            <KeyValue key_="bank account number">{bankAccountNumber}</KeyValue>
            <KeyValue key_="bank account name">{bankAccountName}</KeyValue>
            <KeyValue key_="bank name">{bankName}</KeyValue>
            <KeyValue key_="bank code">{bankCode}</KeyValue>
            <KeyValue key_="bvn">{bvn}</KeyValue>
            <hr />
            <h3>IDENTIFICATION</h3>
            <KeyValue key_="identity type">{identityType}</KeyValue>
            <KeyValue key_="identity number">{identityNumber}</KeyValue>
            <KeyValue key_="expires in">{expiresIn}</KeyValue>
            <KeyValue key_="politically exposed">{politicallyExposed}</KeyValue>
            <hr />
            <h3>NEXT OF KIN</h3>
            <KeyValue key_="name">{nextOfKinName}</KeyValue>
            <KeyValue key_="address">{nextOfKinAddress}</KeyValue>
            <KeyValue key_="email">{nextOfKinEmail}</KeyValue>
            <KeyValue key_="phonenumber">{nextOfKinPhonenumber}</KeyValue>
            <KeyValue key_="relationship">{nextOfKinRelationship}</KeyValue>
            <hr />
            <h3>EMPLOYMENT</h3>
            <KeyValue key_="company name">{companyName}</KeyValue>
            <KeyValue key_="employment type">{employmentType}</KeyValue>
            <KeyValue key_="occupation">{occupation}</KeyValue>
            <hr />
            <br/>
            <button onClick={submitSignup} >Submit</button>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Summary;