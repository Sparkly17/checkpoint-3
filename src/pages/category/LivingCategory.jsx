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

import img1 from "/src/images/category/living/1.png";
import img2 from "/src/images/category/living/2.png";
import img3 from "/src/images/category/living/3.png";
import img4 from "/src/images/category/living/4.png";
import img5 from "/src/images/category/living/5.png";
import img6 from "/src/images/category/living/6.png";
import img7 from "/src/images/category/living/7.png";
import img8 from "/src/images/category/living/8.png";
import img9 from "/src/images/category/living/9.png";
import mimg1 from "/src/images/category/living/m-1.png";
import mimg2 from "/src/images/category/living/m-2.png";
import mimg3 from "/src/images/category/living/m-3.png";
import mimg4 from "/src/images/category/living/m-4.png";
import mimg5 from "/src/images/category/living/m-5.png";
import mimg6 from "/src/images/category/living/m-6.png";
import mimg7 from "/src/images/category/living/m-7.png";
import mimg8 from "/src/images/category/living/m-8.png";
import mimg9 from "/src/images/category/living/m-9.png";
import banner from "/src/images/category/living/banner.png";
import CircleCard from "../../react/CircleCard.jsx";
import {Link} from "react-router-dom";

class LivingCategory extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"category-page category living"}>
                    <div className={"category-banner"}>
                        <h1 className={"category-banner-title b128 m-b30"}>Жилье</h1>
                        <p className={"category-banner-text n20 m-n14-20"}>Жильё это про комфорт и ощущение опоры. Здесь собраны материалы, которые помогают навести порядок без спешки.</p>
                    </div>
                    <img className={"category-banner-img desktop"} src={banner}/>
                    <img className={"category-banner-img mobile"} src={mhouse}/>
                </section>
                <div className={'block category-page-cards'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Link to={'/article/main'}>
                                <Card title={'Снимаем квартиру в новом городе правильно'} tags={['Лонгрид', "Жилье"]} mimage={mimg1}
                                      image={img1}/>
                            </Link>
                            <Link to={'/template'}>
                                <Card title={'Акт приема-передачи квартиры: шаблон'} tags={['Шаблон', "Жилье"]} mimage={mimg2}
                                      image={img2}/>
                            </Link>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
                            <Card title={'Чек-лист хорошего объявления о сдаче жилья'} tags={['Чек-лист', "Жилье"]}
                                  mimage={mimg3} image={img3}/>
                            <Link to={'/article/break-contract'}>
                                <CircleCard type={"vertical"} title={'Что делать, если арендодатель нарушает договор'} tags={['Статья', "Жилье"]} mimage={mimg4}
                                            image={img4}/>
                            </Link>
                            <Link to={'/article/border'}>
                                <Card title={'Выстраиваем границы с соседями правильно'} mimage={mimg5}
                                      tags={['Чек-лист', "Жилье"]} image={img5}/>
                            </Link>

                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <Link to={'/article/communal'}>
                            <Card title={'Коммуналка: за что платишь и как за этим следить'} tags={['Статья', "Жилье"]} mimage={mimg6}
                                  image={img6}/>
                            </Link>
                            <Link to={'/article/leave'}>
                            <Card title={'Как сьехать с квартиры без потерь и ссор'}
                                  tags={['Чек-лист', "Жилье"]} mimage={mimg7} image={img7}/>
                            </Link>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <Link to={'/article/student-flat'}>
                            <CircleCard title={'Студенческое жильё: плюсы  и минусы разных вариантов'} tags={['Статья', "Жилье"]} type={"vertical"} mimage={mimg8}
                                  image={img8}/>
                            </Link>
                            <Card title={'Как найти идеальное жилье?'}
                                  tags={['Чек-лист', "Жилье"]} mimage={mimg9} image={img9}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default LivingCategory;
