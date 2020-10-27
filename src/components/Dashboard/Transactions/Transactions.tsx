import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../CONFIG';
import KeyValue from '../../Tab/Summary/KeyValue';
import Card from '../../UI/Card';
import Loading from '../../UI/Loading';

type TransactionObj = {
    id: number;
    transaction_ref: string;
    cscs_number: string;
    instructions: string;
    trade_date_limit: string;
    trade_effective_date: string;
    trade_action: string;
    trade_price_limit: string;
    trade_unit: string;
    sms_pin: string;
    stock_code: string;
}

const Transaction: React.FC = () => {

    const [transactions, setTransactions] = useState<TransactionObj[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchTransaction = () => {
        setLoading(true);
        const url = BASE_URL + `/api/transactions-view/?user=${localStorage.getItem('userId')}`;
        Axios.get(url)
            .then(res => {
                setLoading(false);
                setTransactions(res.data);
            })
            .catch((err) => {
                setLoading(false);
                alert('something went wrong. reload..');
            })
    }

    useEffect(() => {
        fetchTransaction();
    }, [])

    let content = (
        <>
            <h1>Transaction History</h1>
            {
                transactions.map(transaction => (
                    <Card key={transaction.id}>
                        <h3>{transaction.transaction_ref}</h3>
                        <KeyValue key_="CSCS Number" >
                            {transaction.cscs_number}
                        </KeyValue>
                        <KeyValue key_="Instructions">
                            {transaction.instructions}
                        </KeyValue>
                        <KeyValue key_="Trade date limit">
                            {transaction.trade_date_limit}
                        </KeyValue>
                        <KeyValue key_="Trade effective date">
                            {transaction.trade_effective_date}
                        </KeyValue>
                        <KeyValue key_="Trade action">
                            {transaction.trade_action}
                        </KeyValue>
                        <KeyValue key_="Trade price limit">
                            {transaction.trade_price_limit}
                        </KeyValue>
                        <KeyValue key_="Trade units">
                            {transaction.trade_unit}
                        </KeyValue>
                        <KeyValue key_="SMS Pin">
                            {transaction.sms_pin}
                        </KeyValue>
                        <KeyValue key_="Stock Code">
                            {transaction.stock_code}
                        </KeyValue>
                        <button className="CancelTrade">Cancel Trade</button>
                    </Card>
                ))
            }
        </>
    )

    if (loading) {
        content = <Loading />
    }

    return (
        <div className="Transaction">
            {content}
        </div>
    )
}

export default Transaction;