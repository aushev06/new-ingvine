import styles from './Categories.module.scss';
import {List, ListItem, Menu, MenuItem, useMediaQuery} from "@mui/material";
import clsx from "clsx";
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state';
import {useEffect, useRef, useState} from "react";
import {Link} from 'react-scroll';
import {Icon} from "../Icon";


export const Categories = ({categories}) => {
    const isMobile = useMediaQuery('(max-width:768px)');
    const categoryBlockRef = useRef(null);
    const firstCategories = categories?.slice(0, isMobile ? 7 : 10) || [];
    const length = isMobile ? 7 : 10;
    const lastCategories = categories?.slice(length) || [];
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id)
    const [fixedClass, setFixedClass] = useState('');
    const [lastTimeout, setLastTimeout] = useState(null);

    useEffect(() => {
        if (!activeCategory) {
            setActiveCategory(categories[0]?.id)
        }
        const element = document.querySelector(`#category-${activeCategory}`);
        if (firstCategories.find((item) => item.id === activeCategory) && element) {
            element.scrollIntoView(true)
        }
    }, [activeCategory])

    // useEffect(() => {
    //     window.addEventListener('scroll', (e) => {
    //         if (window.pageYOffset && window.pageYOffset > 130) {
    //             setFixedClass(styles.fixedCategory)
    //         } else {
    //             if (window.pageYOffset) {
    //                 // setFixedClass('')
    //             }
    //         }
    //     })
    // }, []);
    return (
        <div ref={categoryBlockRef}
             className={clsx(styles.root, fixedClass)}>

            {fixedClass && (
                <img src="/mini-logo.svg" />
            )}

            <List className={styles.list}>
                {
                    firstCategories?.map((item) => {
                        return (
                            <ListItem id={'category-' + item.id} key={item.id}
                                      className={clsx(styles.item, item.id === activeCategory ? styles.active : '')}>
                                <Link onSetActive={() => setActiveCategory(item.id)} activeClass={styles.active}
                                      to={item.slug} spy={true} smooth={true} offset={50}
                                      duration={500}>
                                    {item.name}
                                </Link>
                            </ListItem>
                        )
                    })
                }

                {categories.length > length && (
                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <ListItem id={'category-more'} {...bindTrigger(popupState)}
                                          className={clsx(styles.item, styles.more)}>Еще <span><Icon type={'down'} /></span></ListItem>
                                <Menu {...bindMenu(popupState)}>
                                    {lastCategories.map((item) => {
                                        return (
                                            <MenuItem key={item.id} onClick={popupState.close}>
                                                <Link onSetActive={() => setActiveCategory(item.id)}
                                                      activeClass={styles.active} to={item.slug} spy={true}
                                                      smooth={true} offset={50}
                                                      duration={500}>
                                                    {item.name}
                                                </Link>
                                            </MenuItem>

                                        )
                                    })}

                                </Menu>
                            </>
                        )}
                    </PopupState>
                )}

            </List>
        </div>
    )
}
