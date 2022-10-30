import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";

import {Icon} from "../Icon";
import styles from './AddToCartButton.module.scss';

export const AddToCartButton = ({onAdd, price}) => {
    const isMobile = useMediaQuery('(max-width:768px)');

    return (
        <Button onClick={onAdd} className={styles.root} variant="outlined">
            {isMobile ? <Icon type={'plus'}/> : `Добавить ${price ? `${price} ₽` : ''}`}
        </Button>
    )
}
