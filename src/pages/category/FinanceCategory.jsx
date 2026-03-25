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

import img1 from "/src/images/category/finance/1.png";
import img2 from "/src/images/category/finance/2.png";
import img3 from "/src/images/category/finance/3.png";
import img4 from "/src/images/category/finance/4.png";
import img5 from "/src/images/category/finance/5.png";
import img6 from "/src/images/category/finance/6.png";
import img7 from "/src/images/category/finance/7.png";
import img8 from "/src/images/category/finance/8.png";
import img9 from "/src/images/category/finance/9.png";
import mimg1 from "/src/images/category/finance/m-1.png";
import mimg2 from "/src/images/category/finance/m-2.png";
import mimg3 from "/src/images/category/finance/m-3.png";
import mimg4 from "/src/images/category/finance/m-4.png";
import mimg5 from "/src/images/category/finance/m-5.png";
import mimg6 from "/src/images/category/finance/m-6.png";
import mimg7 from "/src/images/category/finance/m-7.png";
import mimg8 from "/src/images/category/finance/m-8.png";
import mimg9 from "/src/images/category/finance/m-9.png";
import banner from "/src/images/category/finance/banner.png";
import CircleCard from "../../react/CircleCard.jsx";

class FinanceCategory extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"category-page category finance"}>
                    <div className={"category-banner"}>
                        <h1 className={"category-banner-title b128 m-b30"}>Финансы</h1>
                        <p className={"category-banner-text n20 m-n14-20"}>Финансы это про понимание своих денег и планирование будущего. Здесь собраны материалы, которые помогут вести бюджет, копить и не попасть в долги.</p>
                    </div>
                    <img className={"category-banner-img desktop"} src={banner}/>
                    <img className={"category-banner-img mobile"} src={mhouse}/>
                </section>
                <div className={'block category-page-cards'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Как составить личный бюджет и реально его придерживаться'} tags={['Лонгрид', "Финансы"]} mimage={mimg1}
                                  image={img1}/>
                            <Card title={'Таблица расходов: шаблон для ежедневного учета'} tags={['Шаблон', "Финансы"]} mimage={mimg2}
                                  image={img2}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
                            <Card title={'Что проверять перед подписанием кредитного договора'} tags={['Шаблон', "Финансы"]}
                                  mimage={mimg3} image={img3}/>
                            <Card type={"vertical"} title={'Минимальный финансовый набор для выезда из родительского дома'} tags={['Чек-лист', "Финансы"]} mimage={mimg4}
                                        image={img4}/>
                            <CircleCard type={"vertical"} title={'Лайфхаки для экономии без стресса'} mimage={mimg5}
                                  tags={['Статья', "Финансы"]} image={img5}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <CircleCard type={"vertical"} title={'Как начать зарабатывать без опыта работы?'} tags={['Статья', "Финансы"]} mimage={mimg6}
                                  image={img6}/>
                            <Card title={'Как открыть счёт в банке и не потерять деньги'}
                                  tags={['Лонгрид', "Финансы"]} mimage={mimg7} image={img7}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Контроль за подписками и регулярными платежами'} tags={['Чек-лист', "Жилье"]} type={"vertical"} mimage={mimg8}
                                        image={img8}/>
                            <Card title={'План накоплений на первый месяц самостоятельной жизни'}
                                  tags={['Чек-лист', "Финансы"]} mimage={mimg9} image={img9}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default FinanceCategory;
