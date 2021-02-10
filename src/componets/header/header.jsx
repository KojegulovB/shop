import React from 'react'
import css from './header.module.css'
import basket from './../../images/shopping-cart.png'
import {Link} from 'react-router-dom'
export const Header = () => {
    return <div className={`${css.wrapper } wrapper `}>
        <Link to={'/'}><div>Logo</div></Link>
        <div className={`${css.menu}`}>
            <div className={`${css.items}`}>Главная</div>
            <div className={`${css.items}`}>Категория</div>
            <div className={`${css.items}`}>Популярные</div>
            <div className={`${css.items}`}>Новинки</div>
        </div>
        <div>
            <div className={`${css.img}`}>
                <Link to={'/basket'} className={css.img}>
                <img src={basket} alt='Basket' />
                </Link>
            </div>
        </div>

    </div>
}

export default Header;