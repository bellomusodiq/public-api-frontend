import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../UI/Input';
import './Login.css';

import axios, { AxiosError, AxiosResponse } from 'axios';
import { BASE_URL } from '../../CONFIG';
import { withRouter } from 'react-router-dom';
import Feedback from '../UI/Feedback';
import Loading from '../UI/Loading';

type Props = {
    history: any;
}

type loginField = {
    username: string;
    password: string;
}

const Login: React.FC<Props> = ({
    history
}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleFeedback = (errorRes: boolean) => {
        setError(errorRes);
        if (errorRes) {
            setFeedbackMessage('something weng wrong...');
        } else {
            setFeedbackMessage('login was successful, redirecting to dashboard...');
        }
        setShowFeedback(true);
    }

    const login = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const url = BASE_URL + '/api/login/';
        const data: loginField = {
            username: email,
            password: password
        }
        axios.post(url, data)
            .then((res: AxiosResponse<any>) => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.userid.toString());
                localStorage.setItem('investorId', res.data.investorid);
                setLoading(false);
                setError(false);
                history.replace('/dashboard');
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

    let loginContent: JSX.Element = (
        <>
            <Feedback show={showFeedback} message={feedbackMessage} error={error} />
            <form onSubmit={login}>
                <Input value={email} type="email" disabled={false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    placeHolder="Email"
                />
                <br />
                <br />
                <Input value={password} type="password" disabled={false}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    placeHolder="Password"
                />
                <br />
                <br />
                <button type="submit">Login</button>
                <br />
                <br />
                Signup <Link to='/signup'>Here</Link>
            </form>
        </>
    )
    if (loading) {
        loginContent = <Loading />
    }

    return (
        <div className="Login">
            {loginContent}
        </div>
    )
}

export default withRouter(Login);