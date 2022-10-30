import Button from "@mui/material/Button";
import {Icon} from "../Icon";
import styles from './CartButton.module.scss';
import {CartDrawer} from "../CartDrawer";
import {useState} from "react";
import {useSelector} from "react-redux";
import {selectCart} from "../../features/cart/cartSlice";

export const CartButton = () => {
    const [totalCount] = useState(0)
    const [totalPrice] = useState(0)
    const [cartOpened, setCartOpened] = useState(false);
    const cart = useSelector(selectCart);
    return (
        <>
            <Button onClick={() => setCartOpened(true)} className={styles.root} variant="outlined"
                    startIcon={<Icon type={'cart'}/>}>
                {cart?.total || 0} ₽
            </Button>
            <CartDrawer
                totalCount={totalCount}
                totalPrice={cart?.total}
                opened={cartOpened}
                onClose={() => setCartOpened(false)}
                items={cart?.cartProperties || []}
            />

        </>
    )
}
