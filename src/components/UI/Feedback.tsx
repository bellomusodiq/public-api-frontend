import React from 'react';
import './Feedback.css';

type Props = {
    show: boolean;
    message: string;
    error: boolean;
}

const Feedback: React.FC<Props> = ({
    show,
    message,
    error
}) => <div className="Feedback" style={{
    display: show?'block':'none',
    color: error?'tomato':'green'
}} >{message}</div>

export default Feedback;