import {Controller, useFormContext} from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import styles from "./Login.module.scss"
import {MuiTelInput} from "mui-tel-input";
import {FormField} from "../FormField";

export const LoginForm = () => {
    const {control, register, formState, getValues} = useFormContext();
    console.log(formState.errors)
    return (
        <div className={styles.formControl}>
            <FormControl className={styles.formControl}>
                <FormField showError={true} error={formState.errors?.phone?.message} autocomplete={false} register={register} placeholder={'Телефон'} name={'phone'}/>
                <FormField error={formState.errors?.password?.message} register={register} placeholder={'Пароль'} name={'password'} type={'password'}/>


            </FormControl>

        </div>
    )
}


export const RegistrationForm = () => {
    const {register} = useFormContext();

    return (
        <div className={styles.formControl}>
            <FormControl className={styles.formControl}>
                <FormField autocomplete={false} register={register} placeholder={'Имя'} name={'name'}/>
                <FormField register={register} placeholder={'Телефон'} name={'phone'}/>
                <FormField register={register} placeholder={'Пароль'} name={'password'} type={'password'}/>

                <FormField register={register} type={'date'} placeholder={'Дата рождения'} name={'birthday'}/>

            </FormControl>

        </div>
    )
}
