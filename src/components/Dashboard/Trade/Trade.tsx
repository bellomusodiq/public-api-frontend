import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../CONFIG';
import KeyValue from '../../Tab/Summary/KeyValue';
import Input from '../../UI/Input';
import Modal from '../../UI/Modal';
import Select from '../../UI/Select';
import Table from '../Table/Table';

import axios from 'axios';
import Loading from '../../UI/Loading';
import Feedback from '../../UI/Feedback';

type StockCode = {
    date: string;
    symbol: string;
    name: string;
    sector: string;
    p_close: string;
    open: string;
    high: string;
    low: string;
    percentage_spread: string;
    close: string;
    sign: string;
    change: string;
    volume: string;
    value: string;
    percentage_change: string;
    average_price: string;
    week_high_52: string;
    Week_low_52: string;
    earnings_per_share: string;
    p_e_ratio: string;
    mkt_segment: string;
}

const tradeActionValues: string[] = ['BUY', 'SELL'];

const Trade = () => {

    const [search, setSearch] = useState<string>('');
    const [marketData, setMarketData] = useState<StockCode[]>([]);
    const [index, setIndex] = useState<number>(-1);
    const [selectedStock, setSelectedStock] = useState<string>('');
    const [tradeDateLimit, setTradeDateLimit] = useState<string>('');
    const [tradeEffectiveDate, setTradeEffectiveDate] = useState<string>('');
    const [tradeAction, setTradeAction] = useState<string>('BUY');
    const [instructions, setInstructions] = useState<string>('');
    const [tradePriceLimit, setTradePriceLimit] = useState<string>('');
    const [tradeUnits, setTradeUnits] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const [loading, setLoading] = useState<boolean>(false);
    const [showFeedback, setShowFeedback] = useState<boolean>(false);
    const [feedbackMessage, setFeedbackMessage] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    const performSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        let filter = e.target.value.toUpperCase();
        let newMarketData: StockCode[] = marketData.filter((mData: StockCode) => {
            return mData.name.toUpperCase().indexOf(filter) > -1
        })
        setMarketData(newMarketData);
    }

    const toggleFeedback = (errorRes: boolean) => {
        setError(errorRes);
        if (errorRes) {
            setFeedbackMessage('something weng wrong...');
        } else {
            setFeedbackMessage('trade was successful...');
        }
        setShowFeedback(true);
    }

    const submitTrade = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const url = BASE_URL + '/api/transactions/';
        const data = {
            instructions: instructions,
            trade_date_limit: tradeDateLimit,
            trade_effective_date: tradeEffectiveDate,
            trade_action: tradeAction,
            trade_price_limit: tradePriceLimit,
            trade_units: tradeUnits,
            stock_code: selectedStock
        }
        const headers = {
            Authorization: `JWT ${localStorage.getItem('token')}`
        }
        axios.post(url, data, { headers: headers })
            .then((res) => {
                setLoading(false);
                setError(false);
                toggleFeedback(false);
                setTimeout(() => {
                    setShowFeedback(false);
                    setIndex(-1);
                    setSelectedStock('');
                    setTradeDateLimit('');
                    setTradeEffectiveDate('');
                    setTradeAction('BUY');
                    setInstructions('');
                    setTradePriceLimit('');
                    setTradeUnits('');
                    setTradePriceLimit('');
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

    const chooseStock = (symbol: string) => {
        setSelectedStock(symbol);
        setShowModal(false);
    }

    const showModalAndSetIndex = (index: number) => {
        setIndex(index);
        setShowModal(true);
    }

    const fetchStock = async () => {
        const url = BASE_URL + '/api/market-symbols/?category=price';
        setLoading(true);
        const response = await axios.get(url);
        const resData = await response.data.data;
        // .then(res => {
        //     // console.log(res.data.data.length)
        console.log(resData);
        setLoading(false);
        setMarketData(resData);
        // })
    }

    useEffect(() => {
        fetchStock();
    }, [])

    const resetTrade = () => {
        setIndex(-1);
        setSelectedStock('');
        setTradeDateLimit('');
        setTradeEffectiveDate('');
        setTradeAction('BUY');
        setInstructions('');
        setTradePriceLimit('');
        setTradeUnits('');
        setTradePriceLimit('');
    }

    let content = (
        <>
            <Feedback show={showFeedback} message={feedbackMessage} error={error} />
            {showModal ?
                <Modal closeModal={() => setShowModal(false)} >
                    <KeyValue key_="Date">{marketData[index].date}</KeyValue>
                    <KeyValue key_="Stock code">{marketData[index].symbol}</KeyValue>
                    <KeyValue key_="Name">{marketData[index].name}</KeyValue>
                    <KeyValue key_="Sector">{marketData[index].sector}</KeyValue>
                    <KeyValue key_="p_close">{marketData[index].p_close}</KeyValue>
                    <KeyValue key_="Open">{marketData[index].open}</KeyValue>
                    <KeyValue key_="High">{marketData[index].high}</KeyValue>
                    <KeyValue key_="Low">{marketData[index].low}</KeyValue>
                    <KeyValue key_="Percentage Spred">{marketData[index].percentage_spread}</KeyValue>
                    <KeyValue key_="Close">{marketData[index].close}</KeyValue>
                    <KeyValue key_="Sign">{marketData[index].sign}</KeyValue>
                    <KeyValue key_="Change">{marketData[index].change}</KeyValue>
                    <KeyValue key_="Volume">{marketData[index].volume}</KeyValue>
                    <KeyValue key_="Value">{marketData[index].value}</KeyValue>
                    <KeyValue key_="Percentage change">{marketData[index].percentage_change}</KeyValue>
                    <KeyValue key_="Average price">{marketData[index].average_price}</KeyValue>
                    <KeyValue key_="Week high">{marketData[index].week_high_52}</KeyValue>
                    <KeyValue key_="Week low">{marketData[index].Week_low_52}</KeyValue>
                    <KeyValue key_="Earnings per share">{marketData[index].earnings_per_share}</KeyValue>
                    <KeyValue key_="P.E. ratio">{marketData[index].p_e_ratio}</KeyValue>
                    <KeyValue key_="Mkt Segment">{marketData[index].mkt_segment}</KeyValue>
                    <button onClick={() => chooseStock(marketData[index].symbol)} >Select Stock</button>
                </Modal> : null}
            <h1>Trade</h1>
            <Input value={search} disabled={false} type="text"
                onChange={performSearch}
                placeHolder="Search Market Data"
            />
            <Table select={true}
                selectStock={(index: number) => showModalAndSetIndex(index)}
                data={marketData} title="Market Data" />
            <button onClick={resetTrade}>Reset Trade</button>
            <form onSubmit={submitTrade}>
                <Input value={selectedStock} disabled={true} type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => { }}
                    placeHolder="Stock code" />
                <Input value={tradeDateLimit} disabled={false} type="date"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTradeDateLimit(e.target.value)}
                    placeHolder="Trade Date Limit"
                />
                <Input value={tradeEffectiveDate} disabled={false} type="date"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTradeEffectiveDate(e.target.value)}
                    placeHolder="Trade Effective Date"
                />
                <Select value={tradeAction} values={tradeActionValues} disabled={false}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTradeAction(e.target.value)}
                    placeHolder="Trade Action" blankValue=""
                />
                <Input value={instructions} disabled={false} type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInstructions(e.target.value)}
                    placeHolder="Instructions"
                />
                <Input value={tradePriceLimit} disabled={false} type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTradePriceLimit(e.target.value)}
                    placeHolder="Trade Price Limit"
                />
                <Input value={tradeUnits} disabled={false} type="number"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTradeUnits(e.target.value)}
                    placeHolder="Trade Units"
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
    if (loading) {
        content = <Loading />
    }
    return (
        <div className="Trade">
            {content}
        </div>
    )
}

export default Trade;