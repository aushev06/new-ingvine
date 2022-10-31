import Drawer from "@mui/material/Drawer";
import styles from './NavigationDrawer.module.scss'
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

export const NavigationDrawer = ({menuOpened, onClose}) => {
    return (
        <Drawer
            anchor={'left'}
            classes={{paper: styles.paper}}
            open={menuOpened}
            onClose={onClose}
        >
            <button type="button" className={styles.closeButton} onClick={onClose}>
                <span className={styles.closeIcon}/>
            </button>

            <nav className={styles.root}>
                <ul className={styles.mainList}>
                    <MenuItem className={styles.item}>
                        <Link to={'/'}>
                            <Typography className={styles.mainItemBoldText} variant="body1">
                                Главная
                            </Typography>
                        </Link>
                    </MenuItem>
                </ul>
            </nav>
        </Drawer>
    )
}
