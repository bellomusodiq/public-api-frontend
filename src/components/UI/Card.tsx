import React from 'react';
import './Card.css';

const Card: React.FC = ({
    children
}) => (
    <div className="Card" onClick={e => e.stopPropagation()} >
        {children}
    </div>
)

export default Card;