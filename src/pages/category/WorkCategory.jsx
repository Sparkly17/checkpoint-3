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

import img1 from "/src/images/category/work/1.png";
import img2 from "/src/images/category/work/2.png";
import img3 from "/src/images/category/work/3.png";
import img4 from "/src/images/category/work/4.png";
import img5 from "/src/images/category/work/5.png";
import img6 from "/src/images/category/work/6.png";
import img7 from "/src/images/category/work/7.png";
import img8 from "/src/images/category/work/8.png";
import img9 from "/src/images/category/work/9.png";
import mimg1 from "/src/images/category/work/m-1.png";
import mimg2 from "/src/images/category/work/m-2.png";
import mimg3 from "/src/images/category/work/m-3.png";
import mimg4 from "/src/images/category/work/m-4.png";
import mimg5 from "/src/images/category/work/m-5.png";
import mimg6 from "/src/images/category/work/m-6.png";
import mimg7 from "/src/images/category/work/m-7.png";
import mimg8 from "/src/images/category/work/m-8.png";
import mimg9 from "/src/images/category/work/m-9.png";
import banner from "/src/images/category/work/banner.png";
import CircleCard from "../../react/CircleCard.jsx";

class WorkCategory extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"category-page category work"}>
                    <div className={"category-banner"}>
                        <h1 className={"category-banner-title b128 m-b30"}>Работа</h1>
                        <p className={"category-banner-text n20 m-n14-20"}>Работа это про карьеру и первые шаги во взрослой жизни. Здесь собраны советы по поиску работы, стажировкам и развитию профессиональных навыков.</p>
                    </div>
                    <img className={"category-banner-img desktop"} src={banner}/>
                </section>
                <div className={'block category-page-cards'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Как составить резюме, чтобы его заметили'} tags={['Лонгрид', "Работа"]} mimage={mimg1}
                                  image={img1}/>
                            <Card title={'Шаблон письма при отклике на вакансию'} tags={['Шаблон', "Жилье"]} mimage={mimg2}
                                  image={img2}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
                            <Card title={'План развития навыков на 3 месяца'} tags={['Шаблон', "Работа"]}
                                  mimage={mimg3} image={img3}/>
                            <Card type={"vertical"} title={'Что подготовить перед собеседованием'} tags={['Чек-лист', "Работа"]} mimage={mimg4}
                                        image={img4}/>
                            <Card title={'Основные ошибки на первом месте работы'} mimage={mimg5}
                                  tags={['Чек-лист', "Работа"]} image={img5}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <CircleCard type={"vertical"} title={'Лайфхаки для продуктивного рабочего дня'} tags={['Статья', "Работа"]} mimage={mimg6}
                                  image={img6}/>
                            <Card title={'Как найти стажировку или подработку без опыта'}
                                  tags={['Лонгрид', "Работа"]} mimage={mimg7} image={img7}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Контроль выполнения задач и дедлайнов'} tags={['Чек-лист', "Работа"]} type={"vertical"} mimage={mimg8}
                                        image={img8}/>
                            <CircleCard type={"vertical"} title={'Как выстраивать отношения с коллегами'}
                                  tags={['Статья', "Работа"]} mimage={mimg9} image={img9}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default WorkCategory;
