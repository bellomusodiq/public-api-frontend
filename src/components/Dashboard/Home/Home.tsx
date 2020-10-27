import React, { useEffect, useState } from 'react';
import Table from '../Table/Table';


import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../../../CONFIG';
import Card from '../../UI/Card';
import Loading from '../../UI/Loading';

type StockCode = {
    stock_code: string;
    name: string;
    sector: string;
    lclose: string;
}

type News = {
    id: number;
    title: string;
    author: string;
    date: string;
}

const Home = () => {

    const [topGainers, setTopGainers] = useState<StockCode[] | null>(null);
    const [topLosers, setTopLosers] = useState<StockCode[] | null>(null);
    const [news, setNews] = useState<News[] | null>(null);

    const fetchMarketData = (category: string) => {
        const url = BASE_URL + '/api/market-data/?category=' + category;
        axios.get(url)
            .then((res: AxiosResponse<any>) => {
                switch (category) {
                    case 'topgainers':
                        setTopGainers(res.data.data);
                        break;
                    case 'toplosers':
                        setTopLosers(res.data.data);
                        break;
                    default:
                        setNews(res.data.data);
                }
            })
    }

    useEffect(() => {
        fetchMarketData('topgainers');
        fetchMarketData('toplosers');
        fetchMarketData('news');
    }, [])

    let newsContent = <Loading />
    if (news) {
        newsContent = (
            <>
                {news.map(data => (
                    <Card key={data.id} >
                        <h4>{data.title}</h4>
                        <p>Author: {data.author}</p>
                        <p>{data.date}</p>
                    </Card>
                ))}
            </>
        )
    }

    return (
        <div className="Home">
            <Table select={false} selectStock={(stock_code: number) => { }} data={topGainers} title="Top Gainers" />
            <Table select={false} selectStock={(stock_code: number) => { }} data={topLosers} title="Top Losers" />
            <br />
            <h1>News</h1>
            {newsContent}
        </div>
    )
}

export default Home;