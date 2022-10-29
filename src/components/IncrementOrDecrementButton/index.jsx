import {Button} from "../Button";
import styles from "../AddToCartButton/AddToCartButton.module.scss";
import {Icon} from "../Icon";

export const IncrementOrDecrementButton = ({type, handle}) => {
    return (
        <Button onClick={handle} className={styles.incrementOrDecrement} variant="outlined">
            {type === 'minus' ? <Icon type={'decrement'}/> : <Icon type={'increment'}/>}
        </Button>
    )
}
