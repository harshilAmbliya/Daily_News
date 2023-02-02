import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem'
import Spinnerbook from './Spinnerbook';


export default class News extends Component {
    articles = []

    constructor() {
        super();

        this.state = {
            articles: this.articles,
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updatenews() {
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
    }
    async componentDidMount(){
        this.updatenews();
    }


    // handleprev = async () => {
    //     // if (Math.ceil(this.state.page + 1 > this.state.totalResults / 6)) {

    //     // } else {
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url)
    //     let parseData = await data.json()
    //     // console.log(parseData)

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parseData.articles,
    //         loading: false
    //     })
    //     // }

    // }
    // handlenext = async () => {
    //     if (this.state.page + 1 > Math.ceil(this.state.totalResults / 6)) {

    //     } else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url)
    //         let parseData = await data.json()

    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parseData.articles,
    //             loading: false
    //         })
    //     }

    // }
    fetchMoreData = async() => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles:this.state.articles.concat(parseData.articles) ,
            totalResults: parseData.totalResults,
            loading: false
        })
    };

    render() {
        return (
            <>
                <div className="container my-3">
                    <h2 className='my-2'>Daily - News Top Headlines..</h2>


                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinnerbook />}
                    >

                        <div className="container row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage ? element.urlToImage : "https://c.ndtvimg.com/2023-01/6cuvsvgg_gauri-khan_625x300_14_January_23.jpg"} newsurl={element.url} />
                                </div>
                            })}

                        </div>
                    </InfiniteScroll>
                </div>

            </>
        )
    }
}
