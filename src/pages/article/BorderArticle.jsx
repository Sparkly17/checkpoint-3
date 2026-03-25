import React from 'react';
import Header from "../../react/Header.jsx";
import Footer from "../../react/Footer.jsx";
import '../../stylesheets/article.scss'
import splash from "/src/images/article/border/splash.png"
import msplash from "/src/images/article/border/m-splash.png"
import img10 from "/src/images/article/img10.png"
import cian from "/src/images/article/cian.png"
import download from "/src/images/icons/download.svg"
import Tag from "../../react/Tag.jsx";
import goto from "/src/images/icons/goto-white.svg"
import Table from "../../react/Table.jsx";
import Card from "../../react/Card.jsx";

import arrow from "/src/images/icons/arrow-right-black.svg"
import FlatCheck from "../../react/FlatCheck.jsx";
import ArticleBanner from "../../react/ArticleBanner.jsx";
import ArticleQuote from "../../react/ArticleQuote.jsx";
import CircleCard from "../../react/CircleCard.jsx";

import img1 from "/src/images/article/border/1.png"
import img2 from "/src/images/article/border/2.png"
import img3 from "/src/images/article/border/3.png"
import img4 from "/src/images/article/border/4.png"
import img5 from "/src/images/article/border/5.png"
import img6 from "/src/images/article/border/6.png"
import mimg1 from "/src/images/article/border/m-1.png"
import mimg2 from "/src/images/article/border/m-2.png"
import mimg3 from "/src/images/article/border/m-3.png"
import mimg4 from "/src/images/article/border/m-4.png"
import mimg5 from "/src/images/article/border/m-5.png"

import banner from "/src/images/article/border/banner.png"


import more_img1 from "/src/images/main/card1.png";
import more_img2 from "/src/images/main/card2.png";
import more_img3 from "/src/images/main/card3.png";
import more_mimg1 from "/src/images/main/mcard1.png";
import more_mimg2 from "/src/images/main/mcard2.png";
import more_mimg3 from "/src/images/main/mcard3.png";

class BorderArticle extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <section className={'intro'}>
                    <ArticleBanner title={"Выстраиваем границы с соседями правильно"}
                                   crumbs={['Главная', 'Быт', 'Выстраиваем границы с соседями правильно']}/>
                    <img className={'desktop intro-img'} style={{top: "120px", right: "0"}} src={banner}/>
                </section>
                <article className={'article border-article gap-96'}>
                    <section className={'article-block gap-96'}>
                        <div className={'gap-24'}>
                            <h2 className={'a-start-title b40 m-b24'}>Соседи: как выстраивать границы и не доводить до
                                конфликта</h2>
                            <p className={'m-s16 s20'}>Жить с соседями — это всегда немного лотерея. Даже если сначала
                                кажется, что всё идеально: «адекватные», «спокойные», «не шумят». Через пару недель
                                начинают проявляться привычки, ритмы, мелкие раздражители. Кто-то поздно ложится и
                                гремит на кухне, кто-то оставляет посуду, кто-то постоянно приводит гостей. И вот ты уже
                                не отдыхаешь дома, а постоянно что-то терпишь.
                                Проблема в том, что большинство конфликтов с соседями не возникают из-за чего-то
                                серьёзного. Они копятся из мелочей, о которых никто не говорит вслух. Каждый думает
                                «ладно, потерплю», а потом в какой-то момент срывается.
                            </p>
                        </div>
                        <img className={'desktop'} src={img1}/>
                        <img className={'mobile'} src={mimg1}/>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Сначала договориться о базовых вещах, даже если кажется, что это
                                очевидно</h2>
                            <p className={'m-s16 s20'}>Когда люди только начинают жить вместе, почти никто не хочет
                                «усложнять» и обсуждать правила. Кажется, что всё и так понятно: не шуметь ночью,
                                убирать за собой, уважать друг друга. На практике у каждого своё «нормально». Для одного
                                «чисто» — это протёр стол, для другого — полноценная уборка. Для одного «тихо» — это без
                                музыки, для другого — можно с колонкой, но не очень громко.
                            </p>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img2}/>
                                <img className={'desktop'} src={img3}/>
                                <img className={'mobile'} src={mimg2}/>
                                <img className={'mobile'} src={mimg3}/>
                            </div>
                            <div className={'desktop'}>
                                <ArticleQuote
                                    quote={'Большинство конфликтов — это не про разногласия, а про невысказанные ожидания'}/>
                            </div>
                            <p className={'m-s16 s20'}>Поэтому лучше один раз проговорить базу, чем потом разбираться в
                                конфликтах. Это не должно быть что-то формальное или жёсткое. Достаточно простого
                                разговора: кто во сколько обычно дома, как распределяются обязанности, как оплачиваются
                                общие вещи, что окей, а что нет.
                                Такие разговоры выглядят неловко только в начале. Потом они экономят кучу нервов.
                            </p>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Не копить раздражение, а говорить сразу, пока это мелочь</h2>
                            <p className={'m-s16 s20'}>
                                Самая частая ошибка — терпеть до последнего. Кажется, что «ну не буду придираться», «это
                                же мелочь». Но именно из мелочей и собирается раздражение. Ты молчишь один раз, второй,
                                третий, а потом в какой-то момент уже реагируешь не на конкретную ситуацию, а на всё
                                сразу. И разговор получается жёстким, даже если проблема изначально была небольшой.
                            </p>
                            <img className={'desktop'} src={img4}/>
                            <img className={'mobile'} src={mimg4}/>
                            <p className={'m-s16 s20'}>Гораздо проще сказать на старте: спокойно и без наезда. Не «ты
                                постоянно всё оставляешь», а «давай договоримся убирать кухню после себя». Не «ты бесишь
                                своим шумом», а «мне сложно засыпать, давай после 23:00 потише». Когда проблема ещё
                                маленькая, её легче решить. И это не воспринимается как конфликт.
                            </p>
                            <div className={'article-splash-img'}>
                                <img className={'desktop'} src={splash}/>
                                <img className={'mobile'} src={msplash}/>
                            </div>
                        </div>
                        <div className={'gap-24'}>
                            <h2 className={'b24 m-b24'}>Сразу договариваться о деньгах и быте</h2>
                            <div className={'article-two-photos-hor'}>
                                <img className={'desktop'} src={img5}/>
                                <img className={'desktop'} src={img6}/>
                                <img className={'mobile'} src={mimg5}/>
                            </div>
                            <p className={'m-s16 s20'}>
                                Деньги — одна из самых частых причин конфликтов. Кто-то забыл перевести, кто-то «потом
                                скинет», кто-то считает, что платит больше.
                                То же самое с бытом: уборка, общие покупки, расходники вроде бумаги или средств для
                                кухни. Если это не проговорено, каждый начинает действовать по своей логике. И в
                                какой-то момент это обязательно всплывёт.
                            </p>
                        </div>
                    </section>
                </article>
                <section className={'articl chapter house block'}>
                    <div className={'chapter-top  article-more-info'}>
                        <h2 className={'chapter-top-title b48 m-sb24'}>Больше на тему <em>жилье</em></h2>
                        <p className={'chapter-top-link n20 m-n20'}>Смотреть все <img src={arrow}/></p>
                    </div>
                    <div className={'chapter-items'}>
                        <a href={'#/article'}>
                            <Card mimage={more_mimg1} image={more_img1}
                                  title={'Что проверить до приезда хозяина квартиры'}
                                  type={'white-text'}
                                  tags={['Статья', 'Жилье']}/>
                        </a>
                        <Card mimage={more_mimg2} image={more_img2} title={'Акт приема-передачи квартиры: шаблон'}
                              type={'white-text'} tags={['Шаблон', 'Жилье']}/>
                        <CircleCard mimage={more_mimg3} image={more_img3} type={'white-text'}
                                    title={'Как распределить бытовые задачи с соседом в общаге'}
                                    tags={['Статья', 'Жилье']}/>
                    </div>
                </section>
                <Footer/>
            </>
        );
    }
}

export default BorderArticle;
