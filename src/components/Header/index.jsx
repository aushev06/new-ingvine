import clsx from 'clsx';
import React, {useState} from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {LogoSvg} from "./LogoSvg";
import {CartButton} from "../CartButton";
import {LoginButton} from "../LoginButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {NavigationDrawer} from "../NavigationDrawer";

export const Header = React.memo(function Header({className, onMenuClick}) {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [opened, setIsOpened] = useState(false);

    if (isMobile) {
        return (
            <>
                <header className={styles.header}>
                    <div>
                        <Link to={'/'}>
                            <img src="/logo.svg" alt=""/>
                        </Link>
                    </div>

                    <div>
                        <img onClick={() => setIsOpened(true)} src="/burger.svg" alt=""/>
                    </div>
                </header>

                <NavigationDrawer menuOpened={opened} onClose={() => setIsOpened(false)}/>
            </>
        )
    }

    return (
        <header className={clsx(styles.header, 'layout')}>
            <div className={styles.left}>
                <Link to={'/'} className={styles.logo}>
                    <i>
                        <LogoSvg/>
                    </i>
                </Link>
                <div className={styles.location}>
                    <img src="/images/location.svg" alt=""/>
                    <span className={styles.locationText}>
                    Магас
                </span>
                </div>
            </div>
            <div className={styles.right}>
                <List className={styles.list}>
                    <ListItem>
                        <Link to={'/'}>Гланая</Link>
                    </ListItem>

                    <ListItem>
                        <Link to={'/'}>Оплата</Link>
                    </ListItem>

                    <ListItem>
                        <Link to={'/'}>Акции</Link>
                    </ListItem>

                    <ListItem>
                        <Link to={'/'}>О нас</Link>
                    </ListItem>
                </List>

                <div>
                    <div className={styles.phone}>+7 (928) 009-88-55</div>
                    <div className={styles.phoneText}>телефон для связи</div>
                </div>
                <div>
                    <CartButton/>
                </div>
                <div>
                    <LoginButton/>
                </div>

            </div>
        </header>
    );
});
