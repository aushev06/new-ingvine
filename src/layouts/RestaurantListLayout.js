import styles from './ChefList.module.scss';


export const RestaurantListLayout = (props) => {
    return (
        <div className={styles.restaurants}>
            <div className={styles.restaurantList}>{props.children}</div>
        </div>
    )
}
