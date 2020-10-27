import React from 'react';

type Props = {
    key_: string;
}

const KeyValue: React.FC<Props> = ({key_, children}) => (
    <div className="KeyValue">
        <div className="Key">{key_}</div>
        <div className="Value">{children}</div>
    </div>
)

export default KeyValue;