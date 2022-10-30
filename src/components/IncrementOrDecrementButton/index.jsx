import styles from "../AddToCartButton/AddToCartButton.module.scss";
import {Icon} from "../Icon";

export const IncrementOrDecrementButton = ({onDecrement, onIncrement, quantity}) => {
    return (
        <div className={styles.propertyActions}>
            <i onClick={onDecrement}>
                <Icon type={'decrement'}/>
            </i>
            <span>{quantity}</span>
            <i onClick={onIncrement}>
                <Icon type={'increment'}/>
            </i>

        </div>
    )
}
