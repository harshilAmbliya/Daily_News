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
        this.props.setProgress(30);
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d&pageSize=${this.props.pagesize}&category=${this.props.category}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(url)
        this.props.setProgress(50);
        let parseData = await data.json()
        this.props.setProgress(70);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,
            loading: false
        })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updatenews();
    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        // { console.log(this.state.page) }
        const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0049c99150884ee49e85af9963fa467d&pageSize=${this.props.pagesize}&category=${this.props.category}&page=${this.state.page}`
        this.setState({ loading: true })
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
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
                        loader={this.state.loading && <Spinnerbook />}
                    >
                        <div className="container row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgurl={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsurl={element.url} />
                                </div>
                            })}

                        </div>
                    </InfiniteScroll>
                </div>

            </>
        )
    }
}
