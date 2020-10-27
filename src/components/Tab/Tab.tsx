import React, { useState } from 'react';
import Loading from '../UI/Loading';
import BankDetails from './BankDetails/BankDetails';
import Employment from './Employment/Employment';
import Identification from './Identification/Identification';
import NextOfKIn from './NextOfKin/NextOfKin';
import Personal from './Personal/Personal';
import Summary from './Summary/Summary';
import './Tab.css';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASE_URL } from '../../CONFIG';
import { withRouter } from 'react-router-dom';

type Props = {
    history: any;
}

const Tab: React.FC<Props> = ({
    history
}) => {



    const [current, setCurrent] = useState<string>('personal');

    // employment states
    const [companyName, setCompanyName] = useState<string>('');
    const [employmentType, setEmploymentType] = useState<string>('');
    const [occupation, setOccupation] = useState<string>('');

    // next of kin states
    const [nextOfKinName, setNextOfKinName] = useState<string>('');
    const [nextOfKinAddress, setNextOfKinAddress] = useState<string>('');
    const [nextOfKinEmail, setNextOfKinEmail] = useState<string>('');
    const [nextOfKinPhonenumber, setNextOfKinPhonenumber] = useState<string>('');
    const [nextOfKinRelationship, setNextOfKinRelationship] = useState<string>('');

    // identification states
    const [identityType, setIdentityType] = useState<string>('');
    const [identityNumber, setIdentityNumber] = useState<string>('');
    const [expiresIn, setExpiresIn] = useState<string>('');
    const [politicallyExposed, setPoliticallyExposed] = useState<string>('');

    // bank details states
    const [bankAccountNumber, setBankAccountNumber] = useState<string>('');
    const [bankAccountName, setBankAccountName] = useState<string>('');
    const [bankName, setBankName] = useState<string>('');
    const [bankCode, setBankCode] = useState<string>('');
    const [bvn, setBvn] = useState<string>('');

    // personal states
    const [title, setTitle] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [otherNames, setOtherNames] = useState<string>('');
    const [dateOfBirth, setDateOfBirth] = useState<string>('');
    const [gender, setGender] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [emailAddress, setEmailAddress] = useState<string>('');
    const [homePhone, setHomePhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state, setState] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [origin, setOrigin] = useState<string>('');
    const [lga, setLga] = useState<string>('');
    const [nationality, setNationality] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);


    const navigateTab = (e: React.MouseEvent<HTMLDivElement>, current: string) => {
        setCurrent(current);
    }

    const toggleFeedback = (errorRes: boolean) => {
        setError(errorRes);
        if (errorRes) {
            setFeedbackMessage('something weng wrong...');
        } else {
            setFeedbackMessage('signup was successful, redirecting to login...');
        }
        setShowFeedback(true);
    }

    type requestData = {
        company_name: string;
        employment_type: string;
        occupation: string,
        next_of_kin_name: string;
        next_of_kin_address: string;
        next_of_kin_email: string;
        next_of_kin_phone_number: string;
        next_of_kin_relationship: string;
        identity_type: string;
        identity_number: string;
        expiry_date: string;
        politically_exposed: string;
        bank_account_number: string;
        bank_account_name: string;
        bank_name: string;
        bank_code: string;
        bvn: string;
        title: string;
        surname: string;
        first_name: string;
        other_names: string;
        gender: string;
        phone: string;
        email_address: string;
        home_phone: string;
        address: string;
        country: string;
        state: string;
        state_of_origin: string;
        date_of_birth: string;
        city: string;
        lga: string;
        nationality: string;
        password: string;
    }

    const submitSignup = () => {
        setLoading(true);
        const url = BASE_URL + '/api/create-customer/';
        const data: requestData = {
            company_name: companyName,
            employment_type: employmentType,
            occupation: occupation,
            next_of_kin_name: nextOfKinName,
            next_of_kin_address: nextOfKinAddress,
            next_of_kin_email: nextOfKinEmail,
            next_of_kin_phone_number: nextOfKinPhonenumber,
            next_of_kin_relationship: nextOfKinRelationship,
            identity_type: identityType,
            identity_number: identityNumber,
            expiry_date: expiresIn,
            politically_exposed: politicallyExposed,
            bank_account_number: bankAccountNumber,
            bank_account_name: bankAccountName,
            bank_name: bankName,
            bank_code: bankCode,
            bvn: bvn,
            title: title,
            surname: surname,
            first_name: firstName,
            other_names: otherNames,
            gender: gender,
            phone: phone,
            email_address: emailAddress,
            home_phone: homePhone,
            address: address,
            country: country,
            state: state,
            state_of_origin: origin,
            date_of_birth: dateOfBirth,
            city: city,
            lga: lga,
            nationality: nationality,
            password: password
        }
        const headers = {

        }
        axios.post(url, data, { headers: headers })
            .then((res: AxiosResponse<any>) => {
                setLoading(false);
                setError(false);
                toggleFeedback(false);
                setTimeout(() => {
                    setShowFeedback(false);
                    history.replace('/login');
                }, 3000);
            })
            .catch((err: AxiosError<any>) => {
                setError(true);
                setLoading(false);
                toggleFeedback(true);
                setTimeout(() => {
                    setShowFeedback(false);
                }, 3000);
            })
    }

    let content: JSX.Element = (
        <>
            <div className="TabHeader">
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'personal')}
                    className={current === "personal" ? "Active" : ""}>
                    PERSONAL
                </div>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'bank')}
                    className={current === "bank" ? "Active" : ""}>
                    BANK DETAILS
                </div>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'identification')}
                    className={current === "identification" ? "Active" : ""}>
                    IDENTIFICATION
                </div>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'next_of_kin')}
                    className={current === "next_of_kin" ? "Active" : ""}>
                    NEXT OF KIN
                </div>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'employment')}
                    className={current === "employment" ? "Active" : ""}>
                    EMPLOYMENT DETAILS
                </div>
                <div onClick={(e: React.MouseEvent<HTMLDivElement>) => navigateTab(e, 'summary')}
                    className={current === "summary" ? "Active" : ""}>
                    SUMMARY
                </div>
            </div>

            <div className="TabBody">
                {
                    current === 'personal' ?
                        <Personal
                            title={title}
                            setTitle={setTitle}
                            surname={surname}
                            setSurname={setSurname}
                            firstName={firstName}
                            setFirstName={setFirstName}
                            otherNames={otherNames}
                            setOtherNames={setOtherNames}
                            dateOfBirth={dateOfBirth}
                            setDateOfBirth={setDateOfBirth}
                            gender={gender}
                            setGender={setGender}
                            phone={phone}
                            setPhone={setPhone}
                            emailAddress={emailAddress}
                            setEmailAddress={setEmailAddress}
                            homePhone={homePhone}
                            setHomePhone={setHomePhone}
                            address={address}
                            setAddress={setAddress}
                            city={city}
                            setCity={setCity}
                            country={country}
                            setCountry={setCountry}
                            state={state}
                            setState={setState}
                            origin={origin}
                            setOrigin={setOrigin}
                            lga={lga}
                            setLga={setLga}
                            nationality={nationality}
                            setNationality={setNationality}
                            password={password}
                            setPassword={setPassword}
                        />
                        :
                        null
                }
                {
                    current === 'bank' ?
                        <BankDetails
                            bankAccountNumber={bankAccountNumber}
                            setBankAccountNumber={setBankAccountNumber}
                            bankAccountName={bankAccountName}
                            setBankAccountName={setBankAccountName}
                            bankName={bankName}
                            setBankName={setBankName}
                            bankCode={bankCode}
                            setBankCode={setBankCode}
                            bvn={bvn}
                            setBvn={setBvn}
                        />
                        :
                        null
                }
                {
                    current === 'identification' ?
                        <Identification
                            identityType={identityType}
                            setIdentityType={setIdentityType}
                            identityNumber={identityNumber}
                            setIdentityNumber={setIdentityNumber}
                            expiresIn={expiresIn}
                            setExpiresIn={setExpiresIn}
                            politicallyExposed={politicallyExposed}
                            setPoliticallyExposed={setPoliticallyExposed}
                        />
                        :
                        null
                }
                {
                    current === 'next_of_kin' ?
                        <NextOfKIn
                            nextOfKinName={nextOfKinName}
                            setNextOfKinName={setNextOfKinName}
                            nextOfKinAddress={nextOfKinAddress}
                            setNextOfKinAddress={setNextOfKinAddress}
                            nextOfKinEmail={nextOfKinEmail}
                            setNextOfKinEmail={setNextOfKinEmail}
                            nextOfKinPhonenumber={nextOfKinPhonenumber}
                            setNextOfKinPhonenumber={setNextOfKinPhonenumber}
                            nextOfKinRelationship={nextOfKinRelationship}
                            setNextOfKinRelationship={setNextOfKinRelationship}
                        />
                        :
                        null
                }
                {
                    current === 'employment' ?
                        <Employment
                            companyName={companyName}
                            setCompanyName={(value: string) => setCompanyName(value)}
                            employmentType={employmentType}
                            setEmploymentType={(value: string) => setEmploymentType(value)}
                            occupation={occupation}
                            setOccupation={(value: string) => setOccupation(value)}
                        />
                        :
                        null
                }
                {
                    current === 'summary' ?
                        <Summary
                            companyName={companyName}
                            employmentType={employmentType}
                            occupation={occupation}
                            nextOfKinName={nextOfKinName}
                            nextOfKinAddress={nextOfKinAddress}
                            nextOfKinEmail={nextOfKinEmail}
                            nextOfKinPhonenumber={nextOfKinPhonenumber}
                            nextOfKinRelationship={nextOfKinRelationship}
                            identityType={identityType}
                            identityNumber={identityNumber}
                            expiresIn={expiresIn}
                            politicallyExposed={politicallyExposed}
                            bankAccountNumber={bankAccountNumber}
                            bankAccountName={bankAccountName}
                            bankName={bankName}
                            bankCode={bankCode}
                            bvn={bvn}
                            title={title}
                            surname={surname}
                            firstName={firstName}
                            otherNames={otherNames}
                            dateOfBirth={dateOfBirth}
                            gender={gender}
                            phone={phone}
                            emailAddress={emailAddress}
                            homePhone={homePhone}
                            address={address}
                            city={city}
                            country={country}
                            origin={origin}
                            lga={lga}
                            nationality={nationality}
                            showFeedback={showFeedback}
                            feedbackMessage={feedbackMessage}
                            error={error}
                            submitSignup={submitSignup}
                        />
                        :
                        null
                }
            </div>
        </>
    );

    if (loading) {
        content = <Loading />
    }

    return (
        <div className="Tab">
            {content}
        </div>
    )
}

export default withRouter(Tab);