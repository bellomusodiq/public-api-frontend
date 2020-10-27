import React from 'react';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import './Personal.css';

type Props = {
    title: string;
    setTitle: (value: string) => void;
    surname: string;
    setSurname: (value: string) => void;
    firstName: string;
    setFirstName: (value: string) => void;
    otherNames: string;
    setOtherNames: (vlaue: string) => void;
    dateOfBirth: string;
    setDateOfBirth: (value: string) => void;
    gender: string;
    setGender: (value: string) => void;
    phone: string;
    setPhone: (value: string) => void;
    emailAddress: string;
    setEmailAddress: (value: string) => void;
    homePhone: string;
    setHomePhone: (value: string) => void;
    address: string;
    setAddress: (value: string) => void;
    city: string;
    setCity: (value: string) => void;
    country: string;
    setCountry: (value: string) => void;
    state: string;
    setState: (value: string) => void;
    origin: string;
    setOrigin: (value: string) => void;
    lga: string;
    setLga: (value: string) => void;
    nationality: string;
    setNationality: (value: string) => void;
    password: string;
    setPassword: (value: string) => void;
}


const Personal: React.FC<Props> = ({
    title,
    setTitle,
    surname,
    setSurname,
    firstName,
    setFirstName,
    otherNames,
    setOtherNames,
    dateOfBirth,
    setDateOfBirth,
    gender,
    setGender,
    phone,
    setPhone,
    emailAddress,
    setEmailAddress,
    homePhone,
    setHomePhone,
    address,
    setAddress,
    city,
    setCity,
    country,
    setCountry,
    state,
    setState,
    origin,
    setOrigin,
    lga,
    setLga,
    nationality,
    setNationality,
    password, 
    setPassword
}) => {

    const titleValues = [
        'Mr.', 'Mrs.', 'Ms.'
    ]
    const genderValues = [
        'Male', 'Female'
    ]
    

    return (
        <div className="PersonalTab">
            <div className="Flex3">
                <Select value={title} placeHolder="Title" values={titleValues} blankValue="Select Title"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTitle(e.target.value)}
                    disabled={false} />
                <Input placeHolder="Surname"
                    value={surname}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Firstname"
                    value={firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)}
                    disabled={false} type="text" />
            
                <Input placeHolder="Other Names"
                    value={otherNames}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherNames(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Date of Birth"
                    value={dateOfBirth}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDateOfBirth(e.target.value)}
                    disabled={false} type="date" />
                <Select value={gender} placeHolder="Gender" values={genderValues} blankValue="Select Gender"
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
                    disabled={false} />
            
                <Input placeHolder="Residence Address"
                    value={address}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="City"
                    value={city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Country"
                    value={country}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="State"
                    value={state}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                    disabled={false} type="text" />
            
                <Input placeHolder="State of Origin"
                    value={origin}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOrigin(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Local Government"
                    value={lga}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLga(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Nationality"
                    value={nationality}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNationality(e.target.value)}
                    disabled={false} type="text" />
            
                <Input placeHolder="Email Address"
                    value={emailAddress}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
                    disabled={false} type="email" />
                <Input placeHolder="Phone number"
                    value={phone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Home Phone"
                    value={homePhone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHomePhone(e.target.value)}
                    disabled={false} type="text" />
                <Input placeHolder="Password"
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    disabled={false} type="password" />
            </div>
        </div>
    )
}

export default Personal;