import React from 'react';
import quoteLeft from "/src/images/icons/quote-left.svg"
import quoteRight from "/src/images/icons/quote-right.svg"

class ArticleQuote extends React.Component {
    render() {
        const { quote, author } = this.props;
        return (
            <div className="article-quote">
                <h3 className={'n32'}>{quote}</h3>
                <h4 className={'n16'}>{author}</h4>
                <img className={'article-quote-left'} src={quoteLeft}/>
                <img className={'article-quote-right'} src={quoteRight}/>
            </div>
        );
    }
}

export default ArticleQuote;
