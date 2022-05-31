import React, { useEffect, useState } from 'react';
import styles from './Filter.module.css'
import items from '../../items.json'
import materials from '../../material.json'
import { useDispatch } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch()
    const [material, setMaterial] = useState('');

    useEffect(() => {
        dispatch({type: 'getAlldata-fulfilled', payload: items})
    }, [dispatch])

    const handleClick = () => {
        dispatch({type: 'getData-filter-fulfilled', payload: materials})
    }

    return (
        <section className={styles.filter}>
            <div className={styles.filter__body}>

                <div className={styles.filter__title}>Комплекты стеллажных систем</div>

                <div className={styles.filter__elements}>
                    <div className={styles.filter__element}>
                        <div className={styles.filter__label}>Сортировать по:</div>
                        <select name={styles.select__price} id="">
                            <option value="">Цена по возростанию</option>    
                            <option value="">Цена по убыванию</option>    
                        </select>
                    </div>

                    <div className={styles.filter__element}>
                        <div className={styles.filter__label}>Материал</div>
                        <select value={material} onChange={(e) => setMaterial(e.target.value)} className={styles.select__material} id="">
                            {materials.map((item) => {
                                return (
                                    <option onClick={() => handleClick ()} value={item.id}>{item.name}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Filter;