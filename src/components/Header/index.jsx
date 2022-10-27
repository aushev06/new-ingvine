import clsx from 'clsx';
import React, { FC } from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {LogoSvg} from "./LogoSvg";
import {CartButton} from "../CartButton";
import {LoginButton} from "../LoginButton";

export const Header = React.memo(function Header({ className, onMenuClick }) {
  return (
    <header className={styles.header}>
        <div className={styles.left}>
            <Link to={'#'} className={styles.logo}>
                <i>
                    <LogoSvg />
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
            <div>
                <div className={styles.phone}>+7 (928) 009-88-55</div>
                <div className={styles.phoneText}>телефон для связи</div>
            </div>
            <div>
                <CartButton />
            </div>
            <div>
                <LoginButton />
            </div>

        </div>
    </header>
  );
});
