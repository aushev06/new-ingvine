import Typography from "@mui/material/Typography";
import {MainLayout} from "../../layouts/MainLayout";
import styles from './Pay.module.scss'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import clsx from "clsx";
import {useSelector} from "react-redux";
import {selectCart} from "../../features/cart/cartSlice";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";

export const Pay = () => {
    const cart = useSelector(selectCart);

    return (
        <MainLayout disableCategories={true}>
            <Typography className={styles.title} variant={'h1'}>
                Оформление заказа
            </Typography>

            <div className={styles.container}>
                <div className={styles.form}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        Доставка
                    </Typography>

                    <FormControl className={styles.formControl}>
                        <TextField
                            className={styles.input}
                            label={<span className={styles.label}>Имя</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>

                    <FormControl className={styles.formControl}>
                        <TextField
                            className={styles.input}
                            label={<span className={styles.label}>Телефон</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>


                    <div className={styles.line}>
                        <div>
                            <FormControl className={styles.formControl}>
                                <TextField
                                    className={styles.input}
                                    label={<span className={styles.label}>Адрес</span>}
                                    variant="filled"
                                    InputProps={{disableUnderline: true}}
                                />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl className={styles.formControl}>
                                <TextField
                                    className={clsx(styles.input, styles.apartment)}
                                    label={<span className={styles.label}>Дом/Квартира</span>}
                                    variant="filled"
                                    InputProps={{disableUnderline: true}}
                                />
                            </FormControl>
                        </div>
                    </div>

                    <FormControl className={styles.formControl}>
                        <TextField
                            className={styles.input}
                            label={<span className={styles.label}>Комментарий к доставке</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                        />
                    </FormControl>


                </div>

                <div className={styles.info}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        Ваш заказ
                    </Typography>

                    <div>
                        <div className={styles.item}>
                            <span>Товары</span>
                            <span>{cart?.total || 0}р</span>
                        </div>

                        <div className={styles.item}>
                            <span>Доставка</span>
                            <span>820р</span>
                        </div>

                        <div className={clsx(styles.item, styles.total)}>
                            <span>Итого</span>
                            <span>{cart?.total}</span>
                        </div>


                        <FormControl className={clsx(styles.formControl, styles.btnContainer)}>
                            <OutlinedInput
                                className={styles.promoCode}
                                variant="filled"
                                InputProps={{disableUnderline: true}}
                                endAdornment={<Button className={styles.btn}>Применить</Button>}
                            />
                        </FormControl>

                        <div className={styles.payContainer}>
                            <Button className={styles.pay}>Оплатить</Button>
                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}
