import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={styles.header__body}>
               <button className={styles.header__grey}>Главная  /</button>
               <button className={styles.header__grey}>Системы хранения  /</button>
               <button >Комплекты стеллажных систем</button>
            </div>
        </header>
    );
};

export default Header;