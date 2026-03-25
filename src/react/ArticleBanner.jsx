import React from 'react';
import classNames from 'classnames';
import download from "/src/images/icons/download-black.svg"
import downloadWhite from "/src/images/icons/download-white.svg"
import Tag from "./Tag.jsx";
import Crumbs from "./Crumbs.jsx";

class ArticleBanner extends React.Component {
    render() {
        const { title, crumbs } = this.props;
        return (
            <section className='article-banner'>
                <div className='article-banner-tags'>
                    <Tag tag={"Статья"}/>
                    <Tag tag={"3 минуты"}/>
                    <Tag tag={"Жилье"}/>
                </div>
                <Crumbs crumbs={crumbs}/>
                <h1 className='article-banner-title b96 m-b32'>{title}</h1>
            </section>
        );
    }
}

export default ArticleBanner;
