import clsx from 'clsx';
import React, {useState} from 'react';
import styles from './Header.module.scss';
import {Link, NavLink} from "react-router-dom";
import {CartButton} from "../CartButton";
import {LoginButton} from "../LoginButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {NavigationDrawer} from "../NavigationDrawer";
import {IconButton} from "../IconButton";
import {SelectCity} from "../SelectCity";
import {Icon} from "../Icon";

export const Header = React.memo(function Header({className, onMenuClick}) {
    const isMobile = useMediaQuery('(max-width:768px)');
    const [opened, setIsOpened] = useState(false);

    if (isMobile) {
        return (
            <>
                <header className={styles.header}>
                    <div>
                        <Link to={'/'}>
                            <img className={styles.mobileLogo} src="/logo.png" alt=""/>
                        </Link>
                    </div>

                    <div>
                        <img onClick={() => setIsOpened(true)} src="/burger.svg" alt=""/>
                    </div>
                </header>

                <NavigationDrawer menuOpened={opened} onClose={() => setIsOpened(false)}/>
                <div style={{display: 'none'}}>
                    <SelectCity/>
                </div>

            </>
        )
    }

    return (
        <header className={clsx(styles.header, 'layout')}>
            <div className={styles.left}>
                <Link to={'/'} className={styles.logo}>
                    <i>
                        <img src="logo.png" alt=""/>
                    </i>
                </Link>
            </div>
            <div className={styles.right}>
                <List className={styles.list}>
                    <ListItem>
                        <NavLink className={window.location.pathname == '/' ? styles.active : ''}
                                 to={'/'}>Гланая</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink className={window.location.pathname == '/delivery' ? styles.active : ''}
                                 to={'/delivery'}>Доставка</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to={'/'}>Акции</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to={'/'}>О нас</NavLink>
                    </ListItem>
                </List>

                <div className={styles.btns}>
                    <SelectCity/>
                    <div>
                        <CartButton/>
                    </div>

                    <div>
                        <LoginButton/>
                    </div>
                </div>

            </div>

        </header>
    );
});
