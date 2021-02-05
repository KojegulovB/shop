import React from 'react'
import css from './header.module.css'
import basket from './../../images/shopping-cart.png'
export const Header = () => {
    return <div className={`${css.wrapper } wrapper `}>
        <div>Logo</div>
        <div className={`${css.menu}`}>
            <div className={`${css.items}`}>Главная</div>
            <div className={`${css.items}`}>Категория</div>
            <div className={`${css.items}`}>Популярные</div>
            <div className={`${css.items}`}>Новинки</div>
        </div>
        <div>
            <div className={`${css.img}`}> 
                <img src={basket} alt='Basket' />
            </div>
        </div>

    </div>
}

export default Header;