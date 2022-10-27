import {Button} from "@mui/material";
import {Icon} from "../Icon";
import styles from './AddToCartButton.module.scss';

export const AddToCartButton = () => {
    return (
        <Button className={styles.root} variant="outlined" startIcon={<Icon type={'plus'}/>}>
            Добавить
        </Button>
    )
}
