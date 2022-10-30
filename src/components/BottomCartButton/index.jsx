import styles from './BottomCartButton.module.scss';
import styles2 from '../AddToCartButton/AddToCartButton.module.scss'
import {Button} from "../Button";
import {Icon} from "../Icon";

export const BottomCartButton = ({ onAdd }) => {
    return (
        <div className={styles.root}>
            <Button onClick={onAdd} className={styles2.root} variant="outlined">
                Корзина
            </Button>
        </div>
    )
}
