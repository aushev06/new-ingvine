import {Button} from "@mui/material";
import {Icon} from "../Icon";
import styles from './CartButton.module.scss';

export const CartButton = () => {
    return (
        <Button className={styles.root} variant="outlined" startIcon={<Icon type={'cart'}/>}>
            2051 ₽
        </Button>
    )
}
