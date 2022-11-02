import * as yup from 'yup';

export const PaySchema = yup
    .object()
    .shape({
        name: yup.string().required('Заполните имя'),
        phone: yup.string().required('Укажите номер телефона'),
    })

