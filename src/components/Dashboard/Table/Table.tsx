import React from 'react';
import Loading from '../../UI/Loading';
import './Table.css';


type Props = {
    title: string;
    data: any[] | null;
    select: boolean;
    selectStock: (index: number) => void | void;
}

const Table: React.FC<Props | null> = ({
    title,
    data,
    select,
    selectStock
}) => {

    let content = <Loading />
    if (data) {
        content = (
            <>
                {data.map((stock, i) => (
                    <div key={i} style={select ? { cursor: 'pointer' } : {}}
                        onClick={() => selectStock(i)}
                        className="TableBody">
                        <div>{stock.stock_code?stock.stock_code:stock.symbol}</div>
                        <div>{stock.name}</div>
                        <div>{stock.sector}</div>
                        <div>{stock.lclose?stock.lclose:stock.p_close}</div>
                    </div>
                ))}
            </>
        )
    }
    return (
        <div className="Table">
            
            <h1>{title}</h1>
            <div className="TableHeading">
                <h4>Stock Code</h4>
                <h4>Name</h4>
                <h4>Sector</h4>
                <h4>lclose</h4>
            </div>
            {content}
        </div>
    )
}

export default Table;