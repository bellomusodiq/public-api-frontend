import React from 'react';

type Props = {
    close: () => void;
}

const Backdrop: React.FC<Props> = ({
    close
}) => (
    <div onClick={close} className="Backdrop"></div>
)

export default Backdrop;