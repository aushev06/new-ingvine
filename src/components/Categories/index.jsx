import styles from './Categories.module.scss';
import {List, ListItem} from "@mui/material";
import clsx from "clsx";

export const Categories = () => {

    return (
        <div className={styles.root}>
            <List className={styles.list}>
                <ListItem className={clsx(styles.item, styles.active)}>Все</ListItem>
                <ListItem className={clsx(styles.item)}>Острые</ListItem>
                <ListItem className={clsx(styles.item)}>Сладкие</ListItem>
                <ListItem className={clsx(styles.item)}>Вегетерианские</ListItem>
                <ListItem className={clsx(styles.item)}>Все</ListItem>
                <ListItem className={clsx(styles.item)}>Все</ListItem>
                <ListItem className={clsx(styles.item)}>Все</ListItem>
            </List>
        </div>
    )
}
