import Button from "@mui/material/Button";
import styles from './IconButton.module.scss';
import {Icon} from "../Icon";

export const IconButton = ({iconType, text, onClick}) => {
    return (
        <Button onClick={onClick} className={styles.root} startIcon={<Icon type={iconType}/>}>
            <span className={styles.font}>{text}</span>
        </Button>
    )
}
