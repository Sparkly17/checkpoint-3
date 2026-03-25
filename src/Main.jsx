import React from 'react';
import Header from "./react/Header.jsx";
import Footer from "./react/Footer.jsx";
import './stylesheets/main.scss'
import Tag from "./react/Tag.jsx";
import Card from "./react/Card.jsx";
import main from "/src/images/other/main.png"
import mmain from "/src/images/main/mmain.png"
import mainPink from "/src/images/other/main-pink.png"
import mainGreen from "/src/images/other/main-green.png"
import goto from "/src/images/icons/goto.svg"
import searchIcon from "/src/images/icons/search.svg"

import docs from "/src/images/themes/docsT.png"
import finance from "/src/images/themes/financeT.png"
import house from "/src/images/themes/houseT.png"
import learn from "/src/images/themes/learnT.png"
import soc from "/src/images/themes/socT.png"
import work from "/src/images/themes/workT.png"

import sections from "/src/images/main/sections.png";
import msections from "/src/images/main/msections.png";

import img1 from "/src/images/main/card1.png";
import img2 from "/src/images/main/card2.png";
import img3 from "/src/images/main/card3.png";
import img4 from "/src/images/main/card4.png";
import img5 from "/src/images/main/card5.png";
import img6 from "/src/images/main/card6.png";
import img7 from "/src/images/main/card7.png";
import img8 from "/src/images/main/card8.png";
import img9 from "/src/images/main/card9.png";
import img10 from "/src/images/main/card10.png";
import img11 from "/src/images/main/card11.png";
import img12 from "/src/images/main/card12.png";
import img13 from "/src/images/main/card13.png";
import img14 from "/src/images/main/card14.png";
import img15 from "/src/images/main/card15.png";
import img16 from "/src/images/main/card16.png";
import img17 from "/src/images/main/card17.png";

import mimg1 from "/src/images/main/mcard1.png";
import mimg2 from "/src/images/main/mcard2.png";
import mimg3 from "/src/images/main/mcard3.png";
import mimg4 from "/src/images/main/mcard4.png";
import mimg5 from "/src/images/main/mcard5.png";
import mimg6 from "/src/images/main/mcard6.png";
import mimg7 from "/src/images/main/mcard7.png";
import mimg8 from "/src/images/main/mcard8.png";
import mimg9 from "/src/images/main/mcard9.png";
import mimg10 from "/src/images/main/mcard10.png";
import mimg11 from "/src/images/main/mcard11.png";
import mimg12 from "/src/images/main/mcard12.png";
import mimg13 from "/src/images/main/mcard13.png";
import mimg14 from "/src/images/main/mcard14.png";
import mimg15 from "/src/images/main/mcard15.png";
import mimg16 from "/src/images/main/mcard16.png";
import mimg17 from "/src/images/main/mcard17.png";

import cot from "/src/images/main/cot.png";

import section1 from "/src/images/main/section1.png";
import section2 from "/src/images/main/section2.png";
import section3 from "/src/images/main/section3.png";
import section4 from "/src/images/main/section4.png";
import section5 from "/src/images/main/section5.png";
import section6 from "/src/images/main/section6.png";

import card_3 from "/src/images/cards/img3.png";
import card_8 from "/src/images/cards/img8.png";
import card_10 from "/src/images/cards/img10.png";
import mcard_3 from "/src/images/cards/mimg3.png";
import mcard_8 from "/src/images/cards/mimg8.png";
import mcard_10 from "/src/images/cards/mimg10.png";

import card1 from "/src/images/main/img1.png";
import card2 from "/src/images/main/img2.png";
import card3 from "/src/images/main/img3.png";
import mcard1 from "/src/images/main/mimg1.png";
import mcard2 from "/src/images/main/mimg2.png";
import mcard3 from "/src/images/main/mimg3.png";
import card_4 from "/src/images/cards/img4.png";
import card4 from "/src/images/main/img4.png";
import card5 from "/src/images/main/img5.png";
import mcard_4 from "/src/images/main/mimg_4.png";
import mcard4 from "/src/images/main/mimg4.png";
import mcard5 from "/src/images/main/mimg5.png";
import card6 from "/src/images/main/img6.png";
import card7 from "/src/images/main/img7.png";
import mcard6 from "/src/images/main/mimg6.png";
import mcard7 from "/src/images/main/mimg7.png";
import card8 from "/src/images/main/img8.png";
import card9 from "/src/images/main/img9.png";
import card10 from "/src/images/main/img10.png";
import card11 from "/src/images/main/img11.png";
import card12 from "/src/images/main/img12.png";
import mcard8 from "/src/images/main/mimg8.png";
import mcard9 from "/src/images/main/mimg9.png";
import mcard10 from "/src/images/main/mimg10.png";
import mcard11 from "/src/images/main/mimg11.png";
import mcard12 from "/src/images/main/mimg12.png";
import card_13 from "/src/images/main/img_13.png";
import card13 from "/src/images/main/img13.png";
import card14 from "/src/images/main/img14.png";
import card15 from "/src/images/main/img15.png";
import card16 from "/src/images/main/img16.png";
import card17 from "/src/images/main/img17.png";
import mcard13 from "/src/images/main/mimg13.png";
import mcard14 from "/src/images/main/mimg14.png";
import mcard15 from "/src/images/main/mimg15.png";
import mcard16 from "/src/images/main/mimg16.png";
import obodok from "/src/images/main/obodok.png"

import mobodok1 from "/src/images/main/mobodok-1.png"
import mobodok2 from "/src/images/main/mobodok-2.png"

import pink2 from "/src/images/main/pink2.png";
import pink from "/src/images/main/pink.png";
import blue from "/src/images/main/blue.png";
import yellow from "/src/images/main/yellow.png";
import CircleCard from "./react/CircleCard.jsx";
import {Link} from "react-router-dom";

class Main extends React.Component {
    render() {
        return (
            <>
                <Header/>
                <img className='desktop arrow-blue' src={blue}/>
                <img className='desktop arrow-pink' src={pink}/>
                <img className='desktop arrow-yellow' src={yellow}/>
                <img className='desktop arrow-pink2' src={pink2}/>
                <section className={'top'}>
                    <div className={'top-title'}>
                        <div className={'top-title-text b172-172 m-b48'}>Чекпоинт</div>
                        <div className={'top-title-text second b28-32 m-b24'}>Лучший друг зумера.<br/> Давай
                            знакомиться!
                        </div>
                    </div>
                    <div className={'top-carousel'}>
                        <div>
                            <a href={'#/checklist'}>
                                <img className={'left-img desktop'} src={main}/>
                                <img className={'left-img mobile'} src={mmain}/>
                                <h1 className={'left-title b48-48 m-b24'}>Как найти хорошее объявление о сдаче
                                    жилья</h1>
                                <div className={'left-tags'}>
                                    <Tag tag={'Чек-лист'}/>
                                    <Tag tag={'Жилье'}/>
                                </div>
                            </a>
                        </div>
                        <div className={'top-carousel-vert desktop'}>
                            <Card fonts={'b24-24 m-b16'} image={mainPink}
                                  title={'Что проверить перед подписанием официального документа'}
                                  tags={['Чек-лист', 'Документы']}/>
                            <Card fonts={'b24-24 m-b16'} image={mainGreen}
                                  title={'Лайфхаки для экономии \n' +
                                      'без стресса'}
                                  tags={['Чек-лист', 'Документы']}/>
                        </div>
                    </div>

                </section>
                <section className={'solve'}>

                    <h2 className={'solve-title sb48-48 m-b30-30'}>Окей, Чекпоинт...</h2>
                    <div className={'solve-search'}>
                        <input className={'solve-input m-n16'} placeholder={'Как жить эту сложную жизнь...'}/>
                        <img className={'solve-icon'} src={searchIcon}/>
                    </div>
                    <img className={'solve-image desktop'} src={obodok}/>
                    <img className={'solve-image-1 mobile'} src={mobodok1}/>
                    <img className={'solve-image-2 mobile'} src={mobodok2}/>
                </section>

                <section className={'chapter house'}>
                    <Link to={'/category/living'}><h2 className={'chapter-top-title sb96 m-sb24'}>Жилье</h2></Link>
                    <div className={'chapter-items'}>
                        <Link to={'/article/main'}>
                            <Card mimage={mimg1} image={img1} title={'Снимаем квартиру в новом городе правильно'}
                                  type={'white-text'}
                                  tags={['Статья', 'Жилье']}/>
                        </Link>
                        <Link to={'/template'}>
                            <Card mimage={mimg2} image={img2} title={'Акт приема-передачи квартиры: шаблон'}
                                  type={'white-text'} tags={['Шаблон', 'Жилье']}/>
                        </Link>
                        <Link to={'/article/main'}>
                            <CircleCard mimage={mimg3} image={img3} type={'white-text'}
                                        title={'Как распределить бытовые задачи с соседом в общаге'}
                                        tags={['Статья', 'Жилье']}/>
                        </Link>
                    </div>
                </section>

                <div className={"chapter-outer work-outer"}>
                    <section className={'chapter work'}>
                        <Link to={'/category/work'}><h2 className={'chapter-top-title sb96 m-b48'}>Работа</h2></Link>
                        <div className={'chapter-items'}>
                            <Card mimage={mimg4} image={img4} title={'Как вести себя на собеседовании'}
                                  tags={['Лонгрид', 'Работа']}/>
                            <Card mimage={mimg5} image={img5} title={'Стартер-пак  документов для трудоустройства'}
                                  tags={['Чек-лист', 'Работа']} type={"black-text"}/>
                            <CircleCard type={"vertical"} mimage={mimg6} image={img6}
                                        title={'Как найти работу и не сойти с ума'}
                                        tags={['Лонгрид', 'Работа']}/>
                        </div>
                    </section>
                </div>

                <section className={'web-sections'}>
                    <Link to={'/category/living'}><img style={{position: "absolute", left: "0px", top: "0px"}} src={section1}/></Link>
                    <Link to={'/category/finance'}><img style={{position: "absolute", left: "408px", top: "0px"}} src={section2}/></Link>
                    <Link to={'/category/docs'}><img style={{position: "absolute", left: "714px", top: "0px"}} src={section3}/></Link>
                    <Link to={'/category/work'}><img style={{position: "absolute", left: "0px", top: "379px"}} src={section4}/></Link>
                    <Link to={'/category/learn'}><img style={{position: "absolute", left: "408px", top: "291px"}} src={section5}/></Link>
                    <Link to={'/category/social'}><img style={{position: "absolute", left: "714px", top: "371px"}} src={section6}/></Link>
                </section>

                <section className={'chapter doc'}>
                    <Link to={'/category/docs'}><h2 className={'chapter-top-title sb96 m-sb24'}>Документы</h2></Link>
                    <div className={'chapter-items'}>
                        <a href={'#/template'}>
                            <Card mimage={mimg7} image={img7} type={'black-text'}
                                  title={'Что не забыть  при оформлении ИП'} tags={['Чек-лист', 'Документы']}/>
                        </a>
                        <CircleCard mimage={mimg8} image={img8} title={'Как не потонуть в документах'}
                                    tags={['Статья', 'Документы']}/>
                        <Card mimage={mimg9} image={img9} title={'Правильно читаем договоры'}
                              tags={['Статья', 'Документы']}/>
                    </div>
                </section>

                <div className={"chapter-outer learn-outer"}>
                    <section className={'chapter learn'}>
                        <Link to={'/category/learn'}><h2 className={'chapter-top-title sb96 m-sb24 m-b48'}>Учеба</h2></Link>
                        <div className={'chapter-items'}>
                            <CircleCard type={"vertical"} mimage={mimg10} image={img10}
                                        title={'Что важно знать будущему студенту'}
                                        tags={['Статья', 'Учеба']}/>
                            <Card mimage={mimg11} image={img11}
                                  title={'Что делать после выпуска, когда «никому не нужен»'}
                                  tags={['Чек-лист', 'Учеба']}/>
                            <Card mimage={mimg12} image={img12} title={'5 шагов, чтобы не ошибиться с профессией'}
                                  tags={['Статья', 'Учеба']}/>
                        </div>
                    </section>
                </div>

                <section className={'chapter collection block'}>
                    <Link to={'/chapter-2'}><h2 className={'chapter-top-title sb96 m-b48'}>Подборки</h2></Link>
                    <div className={'chapter-items'}>
                            <Card fonts={'b32 m-b24'} mimage={mimg13} image={img13}
                                  title={'Набор выживания \n' +
                                      'для переезда: самые важные шпаргалки'}
                                  tags={['Работа', 'Документы', 'Финансы']}
                                    type={"black-text"}/>
                        <Card fonts={'b32 m-b24'} mimage={mimg14} image={img14}
                              title={'Подборка «Финансовая грамотность»'} tags={['Документы', 'Финансы', 'Работа']}/>
                    </div>
                </section>

                <div className={"chapter-outer video-outer"}>
                    <section className={'chapter video-pods block'}>
                        <h2 className={'chapter-top-title sb96 m-b48'}>Видео и подкасты</h2>
                        <div className={'video-pods-content'}>
                            <Card fonts={'b24-24 m-b24'} mimage={mimg15} image={img15} type={"lower white-text"}
                                  title={'Как снять квартиру\n' +
                                      'и не стать обманутым'} tags={['Разбор кейса', 'Жилье']}/>
                            <div className={"video-pods-right"}>
                                <Card fonts={'b24-24 m-b24'} mimage={mimg16} image={img16} type={"lower white-text"}
                                      title={'Первое собеседование: как не растеряться'} tags={['Подкаст', 'Работа']}/>
                                <Card fonts={'b24-24 m-b24'} mimage={mimg17} image={img17} type={"lower white-text"}
                                      title={'Основные правила работы с документами'} tags={['Подкаст', 'Документы']}/>
                            </div>
                        </div>
                    </section>
                    <img src={cot} className={'video-outer-img desktop'}/>
                </div>

                    <Footer/>
                </>
                );
                }
                }

                export default Main;
