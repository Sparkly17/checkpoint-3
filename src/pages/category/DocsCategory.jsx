import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import house from "/src/images/banner/house.png"
import mhouse from "/src/images/banner/mhouse.png"
import '../../stylesheets/chapter.scss'
import Sort_Btn from "../../react/Sort_Btn.jsx";
import time from "/src/images/icons/time.svg"
import asc from "/src/images/icons/asc.svg"
import Card from "../../react/Card.jsx";
import card1 from "/src/images/cards/img1.png";
import card2 from "/src/images/cards/img2.png";
import card3 from "/src/images/cards/img3.png";
import card4 from "/src/images/cards/img4.png";
import card5 from "/src/images/cards/img5.png";
import card6 from "/src/images/cards/img6.png";
import card7 from "/src/images/cards/img7.png";
import card8 from "/src/images/cards/img8.png";
import card9 from "/src/images/cards/img9.png";
import card10 from "/src/images/cards/img10.png";
import mcard1 from "/src/images/cards/mimg1.png";
import mcard2 from "/src/images/cards/mimg2.png";
import mcard3 from "/src/images/cards/mimg3.png";
import mcard4 from "/src/images/cards/mimg4.png";
import mcard5 from "/src/images/cards/mimg5.png";
import mcard6 from "/src/images/cards/mimg6.png";
import mcard7 from "/src/images/cards/mimg7.png";
import mcard8 from "/src/images/cards/mimg8.png";
import mcard9 from "/src/images/cards/mimg9.png";
import mcard10 from "/src/images/cards/mimg10.png";

import img1 from "/src/images/category/docs/1.png";
import img2 from "/src/images/category/docs/2.png";
import img3 from "/src/images/category/docs/3.png";
import img4 from "/src/images/category/docs/4.png";
import img5 from "/src/images/category/docs/5.png";
import img6 from "/src/images/category/docs/6.png";
import img7 from "/src/images/category/docs/7.png";
import img8 from "/src/images/category/docs/8.png";
import img9 from "/src/images/category/docs/9.png";
import mimg1 from "/src/images/category/docs/m-1.png";
import mimg2 from "/src/images/category/docs/m-2.png";
import mimg3 from "/src/images/category/docs/m-3.png";
import mimg4 from "/src/images/category/docs/m-4.png";
import mimg5 from "/src/images/category/docs/m-5.png";
import mimg6 from "/src/images/category/docs/m-6.png";
import mimg7 from "/src/images/category/docs/m-7.png";
import mimg8 from "/src/images/category/docs/m-8.png";
import mimg9 from "/src/images/category/docs/m-9.png";
import banner from "/src/images/category/docs/banner.png";
import CircleCard from "../../react/CircleCard.jsx";

class DocsCategory extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"category-page category docs"}>
                    <div className={"category-banner"}>
                        <h1 className={"category-banner-title b128 m-b30"}>Документы</h1>
                        <p className={"category-banner-text n20 m-n14-20"}>Документы это порядок и безопасность. В разделе собраны инструкции, шаблоны и советы по оформлению и хранению важных бумаг.</p>
                    </div>
                    <img className={"category-banner-img desktop"} src={banner}/>
                </section>
                <div className={'block category-page-cards'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <CircleCard type={"vertical"} title={'Лайфхаки для организации бумаг дома'} tags={['Статья', "Документы"]} mimage={mimg1}
                                  image={img1}/>
                            <Card title={'Какие документы нужны при переезде в другой город'} tags={['Лонгрид', "Документы"]} mimage={mimg2}
                                  image={img2}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
                            <Card title={'Что проверить перед подписанием официального документа'} tags={['Чек-лист', "Документы"]}
                                  mimage={mimg3} image={img3}/>
                            <Card title={'Шаблон для оформления договора аренды'} tags={['Шаблон', "Документы"]} mimage={mimg4}
                                        image={img4}/>
                            <Card title={'Таблица хранения и сроков действия документов'} mimage={mimg5}
                                  tags={['Шаблон', "Документы"]} image={img5}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Как восстановить потерянные документы'} tags={['Лонгрид', "Документы"]} mimage={mimg6}
                                  image={img6}/>
                            <Card title={'Минимальный набор документов для взрослой жизни'}
                                  tags={['Чек-лист', "Документы"]} mimage={mimg7} image={img7}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Проверка документов перед поездкой или регистрацией'} tags={['Чек-лист', "Документы"]} type={"vertical"} mimage={mimg8}
                                        image={img8}/>
                            <CircleCard type={"vertical"} title={'Как безопасно передавать личные данные онлайн'}
                                  tags={['Статья', "Документы"]} mimage={mimg9} image={img9}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default DocsCategory;
