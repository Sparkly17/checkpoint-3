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

import img1 from "/src/images/category/social/1.png";
import img2 from "/src/images/category/social/2.png";
import img3 from "/src/images/category/social/3.png";
import img4 from "/src/images/category/social/4.png";
import img5 from "/src/images/category/social/5.png";
import img6 from "/src/images/category/social/6.png";
import img7 from "/src/images/category/social/7.png";
import img8 from "/src/images/category/social/8.png";
import img9 from "/src/images/category/social/9.png";
import mimg1 from "/src/images/category/social/m-1.png";
import mimg2 from "/src/images/category/social/m-2.png";
import mimg3 from "/src/images/category/social/m-3.png";
import mimg4 from "/src/images/category/social/m-4.png";
import mimg5 from "/src/images/category/social/m-5.png";
import mimg6 from "/src/images/category/social/m-6.png";
import mimg7 from "/src/images/category/social/m-7.png";
import mimg8 from "/src/images/category/social/m-8.png";
import mimg9 from "/src/images/category/social/m-9.png";
import banner from "/src/images/category/social/banner.png";
import CircleCard from "../../react/CircleCard.jsx";

class SocialCategory extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={"category-page category social"}>
                    <div className={"category-banner"}>
                        <h1 className={"category-banner-title b128 m-b30"}>Общение</h1>
                        <p className={"category-banner-text n20 m-n14-20"}>Социализация это про друзей, новые знакомства и комфортное общение. Здесь вы найдёте подсказки, как заводить контакты, не теряя себя и поддерживая хорошие отношения с людьми.</p>
                    </div>
                    <img className={"category-banner-img desktop"} src={banner}/>
                </section>
                <div className={'block category-page-cards'}>
                    <section className={'cards-section'}>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Как заводить друзей во взрослом возрасте'} tags={['Лонгрид', "Социализация"]} mimage={mimg1}
                                  image={img1}/>
                            <Card title={'План недели для активного общения'} tags={['Шаблон', "Социализация"]} mimage={mimg2}
                                  image={img2}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 1fr 1fr"}}>
                            <Card title={'Основные правила этикета в новых компаниях'} tags={['Чек-лист', "Социализация"]}
                                  mimage={mimg3} image={img3}/>
                            <Card type={"vertical"} title={'Где искать единомышленников и как не стесняться'} tags={['Шаблон', "Социализация"]} mimage={mimg4}
                                        image={img4}/>
                            <CircleCard type={"vertical"} title={'Идеи для встреч и активностей с друзьями'} mimage={mimg5}
                                  tags={['Статья', "Социализация"]} image={img5}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "1fr 2fr"}}>
                            <Card title={'Как поддерживать дружбу на расстоянии'} tags={['Чек-лист', "Социализация"]} mimage={mimg6}
                                  image={img6}/>
                            <Card title={'Лайфхаки для комфортного начала общения на новых курсах или работе'}
                                  tags={['Лонгрид', "Социализация"]} mimage={mimg7} image={img7}/>
                        </div>
                        <div className={'cards-list'} style={{gridTemplateColumns: "2fr 1fr"}}>
                            <Card title={'Как справляться с конфликтами и сохранять отношения'} tags={['Чек-лист', "Социализация"]} type={"vertical"} mimage={mimg8}
                                        image={img8}/>
                            <CircleCard type={"vertical"} title={'Что делать, если чувствуешь себя одиноко'}
                                  tags={['Статья', "Социализация"]} mimage={mimg9} image={img9}/>
                        </div>
                    </section>
                </div>
                <Footer/>
            </>
        );
    }
}

export default SocialCategory;
