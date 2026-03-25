import React from 'react';
import logo from "/src/images/icons/logo.svg"
import mLogo from "/src/images/icons/m-logo.svg"
import burger from "/src/images/icons/burger.svg"
import search from "/src/images/icons/search.svg"
import arrow from "/src/images/icons/chevron-down.svg"
import classNames from 'classnames';
import {Link} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header className={classNames("header")}>
                <Link to={'/'}><img className={'desktop'} src={logo}/></Link>
                <Link to={'/'}><img className={'mobile'} src={mLogo}/></Link>
                <a href={'#/'} className={'header-burger'}><img className={'mobile'} src={burger}/></a>
                <nav className={classNames("nav desktop")}>
                    <Link className={classNames("nav-link living", "n16", "m-n14")} to={'/category/living'}>Жилье</Link>
                    <Link className={classNames("nav-link finance", "n16", "m-n14")} to={'/category/finance'}>Финансы</Link>
                    <Link className={classNames("nav-link docs", "n16", "m-n14")} to={'/category/docs'}>Документы</Link>
                    <Link className={classNames("nav-link work", "n16", "m-n14")} to={'/category/work'}>Работа</Link>
                    <Link className={classNames("nav-link learn", "n16", "m-n14")} to={'/category/learn'}>Учеба</Link>
                    <Link className={classNames("nav-link social", "n16", "m-n14")} to={'/category/social'}>Социализация</Link>
                    <Link className={classNames("nav-link", "n16", "m-n14")}>
                        Форматы
                        <img className={'desktop'} src={arrow}/>
                    </Link>
                </nav>
                <div className={classNames("search desktop")}>
                    <img className={classNames("search-icon")} src={search}/>
                </div>
            </header>
        );
    }
}

export default Header;
