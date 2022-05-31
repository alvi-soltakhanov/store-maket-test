import React  from "react";
import { useSelector } from "react-redux";
import styles from "./Main.module.css";
import buyed from '../../assets/buyed.png'
import cart from '../../assets/cart.png'
import favorite from '../../assets/favorite.png'

const Main = () => {

  const items = useSelector(state => state.cards);

  return (
    <section className={styles.cards}>
      <div className={styles.cards__body}>
        {items.map((item) => {
          return (
            <div className={styles.card}>
              <div className={styles.card__Image}><img src={item.image.url} alt="" /></div>

              {item.price.old_price && <div className={styles.card__discount}>Скидка</div>}

              <div className={styles.card__Description}>
                  <div className={styles.card__code}>{item?.code}</div>
                  <div className={styles.card__name}>{item.name}</div>
                  <div className={styles.card__info}>
                      <div className={styles.card__price}>
                        <div className={styles.card__oldprice}>{item.price.old_price && `${Math.round(item.price.old_price)}₽`}</div>
                        <div className={styles.card__current_price}>{Math.round(item.price.current_price)} ₽ </div>
                      </div>
                      <div className={styles.card__buttons}>
                        <img src={cart} alt="" />
                        <img src={favorite} alt="" />
                      </div>
                  </div>
              </div>
            </div>
          )})}
      </div>
    </section>
  );
};

export default Main;
