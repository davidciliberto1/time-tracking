import React from 'react';
import styles from './itemCard.module.css';
import iconWork from '../../../Assets/images/icon-work.svg';


const ItemCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.backgroundCard}>
                <img className={styles.iconWork} src={iconWork} alt='alter' /><br />
                <div className={styles.card}>
                    <div className={styles.headerCard}>
                        <div className={styles.activity}>Work</div>
                        <div className={styles.cardMenu}>...</div>
                    </div>
                    <div className={styles.time}>4Hrs</div>
                    <div className={styles.timeActive}>Last week - 35Hrs</div>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;
