import React, { useEffect, useState } from 'react';
import './Accounts.css';
import axios from 'axios';
import { BASE_URL } from "../../../CONFIG";
import Loading from '../../UI/Loading';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Feedback from '../../UI/Feedback';

const Accounts = () => {

    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [otherNames, setOtherNames] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [gender, setGender] = useState<string>("");
    const [dob, setDob] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [nationality, setNationality] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("");
    const [bankAccountNumber, setBankAccountNumber] = useState<string>("");
    const [bankAccountName, setBankAccountName] = useState<string>("");
    const [bankName, setBankName] = useState<string>("");
    const [bankCode, setBankCode] = useState<string>("");
    const [branchCode, setBranchCode] = useState<string>("");
    const [nextOfKinName, setNextOfKinName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [accType, setAccType] = useState<string>("");

    const convertDate = (date: string): string => {
        const [month, day, year] = date.split('-');
        return year + '-' + month + '-' + day;
    }

    const toggleFeedback = (errorRes: boolean) => {
        setError(errorRes);
        if (errorRes) {
            setFeedbackMessage('something weng wrong...');
        } else {
            setFeedbackMessage('customer update was successful');
        }
        setShowFeedback(true);
    }

    const fetchUserDetails = () => {
        setLoading(true);
        const userId = localStorage.getItem("userId");
        const url = BASE_URL + '/api/investors/' + userId + '/';
        axios.get(url)
            .then(res => {
                console.log(res.data.data);
                setLoading(false);
                setTitle(res.data.data.investor.personal.title);
                setSurname(res.data.data.investor.personal.surname);
                setFirstname(res.data.data.investor.personal.first_name);
                setOtherNames(res.data.data.investor.personal.other_names);
                setEmailAddress(res.data.data.investor.personal.email_address);
                setGender(res.data.data.investor.personal.gender);
                setDob(convertDate(res.data.data.investor.personal.date_of_birth));
                setPhone(res.data.data.investor.personal.phone);
                setAddress(res.data.data.investor.location.address);
                setCountry(res.data.data.investor.location.country);
                setState(res.data.data.investor.location.state);
                setNationality(res.data.data.investor.location.nationality);
                setCity(res.data.data.investor.location.city);
                setBankAccountNumber(res.data.data.investor.financial.bank_account_number);
                setBankAccountName(res.data.data.investor.financial.bank_account_name);
                setBankName(res.data.data.investor.financial.bank_name);
                setBankCode(res.data.data.investor.financial.bank_code);
                setBranchCode(res.data.data.investor.financial.branch_code);
                setAccType(res.data.data.investor.financial.acc_type);
                setNextOfKinName(res.data.data.investor.next_of_kin.name);
                setCompanyName(res.data.data.investor.employment.company_name);
            })
    }

    const updateCustomer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const url = BASE_URL + '/api/update-customer/';
        const headers = {
            Authorization: `JWT ${localStorage.getItem("token")}`
        }
        const data = {
            title: title,
            surname: surname,
            first_name: firstname,
            other_names: otherNames,
            email_address: emailAddress,
            gender: gender,
            date_of_birth: dob,
            address: address,
            country: country,
            state: state,
            nationality: nationality,
            city: city,
            bank_account_number: bankAccountNumber,
            bank_account_name: bankAccountName,
            bank_name: bankName,
            bank_code: bankCode,
            branch_code: branchCode,
            next_of_kin_name: nextOfKinName,
            phone: phone,
            company_name: companyName,
            acc_type: accType
        }
        axios.post(url, data, { headers: headers })
            .then((res) => {
                setLoading(false);
                setError(false);
                toggleFeedback(false);
                setTimeout(() => {
                    setShowFeedback(false);
                }, 3000);
            })
            .catch((err) => {
                setError(true);
                setLoading(false);
                toggleFeedback(true);
                setTimeout(() => {
                    setShowFeedback(false);
                }, 3000);
            })
    }

    useEffect(() => {
        fetchUserDetails();
    }, [])

    return (
        <div className="Accounts">
            {loading ? <Loading /> : null}
            <Feedback show={showFeedback} message={feedbackMessage} error={error} />
            <form onSubmit={updateCustomer}>
                <div className="Grid">
                    <Select value={title} placeHolder="Title" values={['Mr.', 'Mrs.', 'Ms.']} blankValue="Select Title"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTitle(e.target.value)}
                        disabled={false} />
                    <Input value={surname} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value)}
                        placeHolder="Surname"
                    />
                    <Input value={firstname} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstname(e.target.value)}
                        placeHolder="Firstname"
                    />
                    <Input value={otherNames} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherNames(e.target.value)}
                        placeHolder="Other Names"
                    />
                    <Input value={emailAddress} disabled={false} type="email"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmailAddress(e.target.value)}
                        placeHolder="Email Address"
                    />
                    <Select value={gender} placeHolder="Gender" values={['M', 'F']} blankValue="Select Gender"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value)}
                        disabled={false} />
                    <Input value={dob} disabled={false} type="date"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDob(e.target.value)}
                        placeHolder="Date of Birth"
                    />
                    <Input value={address} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                        placeHolder="Address"
                    />
                    <Input value={country} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCountry(e.target.value)}
                        placeHolder="Country"
                    />
                    <Input value={nationality} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNationality(e.target.value)}
                        placeHolder="Nationality"
                    />
                    <Input value={city} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)}
                        placeHolder="City"
                    />
                    <Input value={state} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}
                        placeHolder="State"
                    />
                    <Input value={phone} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                        placeHolder="Phone"
                    />
                    <Input value={bankAccountNumber} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccountNumber(e.target.value)}
                        placeHolder="Bank Account Number"
                    />
                    <Input value={bankAccountName} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankAccountName(e.target.value)}
                        placeHolder="Bank Account Name"
                    />
                    <Input value={bankName} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankName(e.target.value)}
                        placeHolder="Bank Name"
                    />
                    <Input value={bankCode} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBankCode(e.target.value)}
                        placeHolder="Bank Code"
                    />
                    <Input value={branchCode} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBranchCode(e.target.value)}
                        placeHolder="Branch Code"
                    />
                    <Input value={nextOfKinName} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNextOfKinName(e.target.value)}
                        placeHolder="Next of Kin Name"
                    />
                    <Input value={companyName} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)}
                        placeHolder="Company Name"
                    />
                    <Input value={accType} disabled={false} type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAccType(e.target.value)}
                        placeHolder="Acc Type"
                    />
                </div>
                <br />
                <br />
                <button type="submit">Update Customer</button>
                <br />
                <br />
            </form>
        </div>
    )
}

export default Accounts;