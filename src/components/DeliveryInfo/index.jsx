import styles from './DeliveryInfo.module.scss'
import {ListItem, Typography} from "@mui/material";
import Divider from "@mui/material/Divider";
import {Icon} from "../Icon";
import React from "react";
import clsx from "clsx";

export const DeliveryInfo = () => {
    const currentDay = new Date().getDay();

    return (
        <div className={styles.center}>
            <div className={styles.root}>
                <div className={styles.days}>
                    <ul>
                        <ListItem className={clsx(currentDay === 1 ? styles.active : '')}>Пн</ListItem>
                        <ListItem className={clsx(currentDay === 2 ? styles.active : '')}>Вт</ListItem>
                        <ListItem className={clsx(currentDay === 3 ? styles.active : '')}>Ср</ListItem>
                        <ListItem className={clsx(currentDay === 4 ? styles.active : '')}>Чт</ListItem>
                        <ListItem className={clsx(currentDay === 5 ? styles.active : '')}>Пт</ListItem>
                        <ListItem className={clsx(currentDay === 6 ? styles.active : '')}>Сб</ListItem>
                        <ListItem className={styles.disable}>Вс</ListItem>
                    </ul>
                </div>

                <div>
                    <Typography className={styles.schedule}>График работы</Typography>
                    <div className={styles.time}>
                        9:00-21:00
                    </div>
                </div>

                <div>
                    <Typography className={styles.schedule}>Время доставки</Typography>
                    <div className={styles.time}>
                        40 мин
                    </div>
                </div>

                <Divider className={styles.divider} variant="middle" />

                <div className={styles.phone}>
                    <Icon type={'phone'}/>
                    +7 928 097 41 12
                </div>

            </div>
        </div>
    )
}
