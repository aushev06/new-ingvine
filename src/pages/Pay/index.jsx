import Typography from "@mui/material/Typography";
import {MainLayout} from "../../layouts/MainLayout";
import styles from './Pay.module.scss'
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import clsx from "clsx";
import {useDispatch, useSelector} from "react-redux";
import {getCartAsync, selectCart} from "../../features/cart/cartSlice";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import {MuiTelInput} from 'mui-tel-input'

import {
    useForm,
    Controller,
} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {PaySchema} from "../../schemas/PaySchema";
import {selectSelectedCity} from "../../features/city/citySlice";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {SelectCity} from "../../components/SelectCity";
import {useState} from "react";
import {cartApi} from "../../service/cart";
import {useAlert} from "../../hooks/useAlert";
import {useNavigate} from "react-router-dom";

const DELIVERY_TYPE_PICKUP = 1;
const DELIVERY_TYPE_COURIER = 2;
const TYPE_CASH = 0;
const isTg = window.location.search.includes('token');
export const Pay = () => {
    const cart = useSelector(selectCart);
    const city = useSelector(selectSelectedCity);
    const dispatch = useDispatch();
    const [isDelivery, setIsDelivery] = useState(true)
    const {openAlert} = useAlert();
    const navigate = useNavigate()

    const {register, handleSubmit, control, formState, setValue, getValues, setError} = useForm({
        mode: "onBlur",
        resolver: yupResolver(PaySchema),
        defaultValues: {
            name: '',
            phone: '',
            address: '',
            delivery_type: 2,
            pay_type: '',
            city,
            street: "",
            house: "",
            entrance: "",
            apartment: "",
        },
    });
    const values = getValues();

    const checkClientEmptyFields = () => {
        const clientErrors = [];

        if (values.delivery_type === DELIVERY_TYPE_PICKUP) {

            if (!values.name) {
                clientErrors.push('???????????????????? ?????????????? ??????');
            }
            if (!values.phone) {
                clientErrors.push('???????????????????? ?????????????? ?????????? ????????????????');
            }

        } else {

            if (!values.name) {
                clientErrors.push('???????????????????? ?????????????? ??????');
            }
            if (!values.phone) {
                clientErrors.push('???????????????????? ?????????????? ?????????? ????????????????');
            }
            if (!isTg && !city) {
                clientErrors.push('???????????????????? ?????????????? ??????????');
                setError('city', {message: '???????????????? ??????????'})
            }
            if (!values.street) {
                clientErrors.push('???????????????????? ?????????????? ??????????');
                setError('street', {message: '?????????????? ??????????'})
            }
            if (!values.house) {
                clientErrors.push('???????????????????? ?????????????? ??????');
                setError('house', {message: '?????????????? ??????'})
            }

        }

        if (clientErrors.length > 0) {
            openAlert(clientErrors[0], 'error')
            return false;
        }

        return true;
    };


    const onSubmit = async (data) => {
        if (!isTg && data.delivery_type !== DELIVERY_TYPE_PICKUP && cart?.total < 500) {
            openAlert('???????????????? ???? 500 ????????????', 'error');
            return;
        }

        if (!checkClientEmptyFields()) {
            return;
        }
        try {
            await cartApi.save(data);
            localStorage.setItem('token', new Date().getTime());
            dispatch(getCartAsync())
            navigate('/success')

        } catch (e) {

        }

    }

    return (
        <MainLayout disableCategories={true}>
            <Typography className={styles.title} variant={'h1'}>
                ???????????????????? ????????????
            </Typography>

            <div className={styles.container}>
                <div className={styles.form}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        ????????????????
                    </Typography>

                    <FormControl className={styles.formControl}>
                        <TextField
                            {...register("name")}
                            className={styles.input}
                            label={<span className={styles.label}>??????</span>}
                            variant="filled"
                            InputProps={{disableUnderline: true}}
                            error={!!formState?.errors?.name?.message}
                            helperText={formState?.errors?.name?.message}
                        />
                    </FormControl>

                    <FormControl className={styles.formControl}>
                        <Controller
                            name="phone"
                            control={control}
                            render={({field}) => (
                                <MuiTelInput
                                    {...field}
                                    placeholder={"+7 ___ ___ __ __"}
                                    disableDropdown
                                    defaultCountry="RU"
                                    error={!!formState?.errors?.phone?.message}
                                    helperText={formState?.errors?.phone?.message}
                                    className={styles.input}
                                    label={<span className={styles.label}>??????????????</span>}
                                    variant="filled"
                                    InputProps={{disableUnderline: true}}/>
                            )}
                        />


                    </FormControl>

                    <FormControl className={styles.formControl}>
                        <FormLabel className={styles.radioTitle} id="demo-controlled-radio-buttons-group">????????????
                            ????????????????</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={`${values.delivery_type}`}
                            onChange={(e) => {
                                setValue('delivery_type', +e.target.value);
                                setIsDelivery(+e.target.value === 2);
                            }}
                        >
                            <FormControlLabel value="2" control={<Radio/>} label="????????????????"/>
                            <FormControlLabel value="1" control={<Radio/>} label="??????????????????"/>
                        </RadioGroup>
                    </FormControl>

                    {isDelivery && (
                        <>
                            <FormControl>
                                <SelectCity/>
                            </FormControl>

                            <div className={styles.line}>
                                <div>
                                    <FormControl className={styles.formControl}>
                                        <TextField
                                            {...register("street")}
                                            error={!!formState?.errors?.street?.message}
                                            helperText={formState?.errors?.street?.message}
                                            className={styles.input}
                                            label={<span className={styles.label}>??????????</span>}
                                            variant="filled"
                                            InputProps={{disableUnderline: true}}
                                        />
                                    </FormControl>
                                </div>
                                <div>
                                    <FormControl className={styles.formControl}>
                                        <TextField
                                            {...register("house")}
                                            error={!!formState?.errors?.house?.message}
                                            helperText={formState?.errors?.house?.message}
                                            className={clsx(styles.input, styles.apartment)}
                                            label={<span className={styles.label}>??????/????????????????</span>}
                                            variant="filled"
                                            InputProps={{disableUnderline: true}}
                                        />
                                    </FormControl>
                                </div>
                            </div>

                            <FormControl className={styles.formControl}>
                                <TextField
                                    {...register("comment")}
                                    error={!!formState?.errors?.comment?.message}
                                    helperText={formState?.errors?.comment?.message}
                                    className={styles.input}
                                    label={<span className={styles.label}>?????????????????????? ?? ????????????????</span>}
                                    variant="filled"
                                    InputProps={{disableUnderline: true}}
                                />
                            </FormControl>
                        </>
                    )}


                </div>

                <div className={styles.info}>
                    <Typography className={styles.formTitle} variant={'h5'}>
                        ?????? ??????????
                    </Typography>

                    <div>
                        <div className={styles.item}>
                            <span>????????????</span>
                            <span>{cart?.total || 0}??</span>
                        </div>

                        <div className={styles.item}>
                            <span>????????????????</span>
                            <span>820??</span>
                        </div>

                        <div className={clsx(styles.item, styles.total)}>
                            <span>??????????</span>
                            <span>{cart?.total}</span>
                        </div>


                        <FormControl className={clsx(styles.formControl, styles.btnContainer)}>
                            <OutlinedInput
                                placeholder={'?????????????? ??????????'}
                                className={styles.promoCode}
                                variant="filled"
                                endAdornment={<Button className={styles.btn}>??????????????????</Button>}
                            />
                        </FormControl>

                        <div className={styles.payContainer}>
                            <Button onClick={handleSubmit(onSubmit)} className={styles.pay}>????????????????</Button>
                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}
