import * as yup from 'yup';

export const resetPasswordValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('El correo es inválido')
        .required('El correo es obligatorio'),
    code: yup
        .string()
        .min(5, 'No debe tener menos de 5 carácteres')
        .max(8, 'No debe exceder de 8 carácteres')
        .required('Este campo es obligatorio'),
    password: yup
        .string()
        .min(5, 'No debe ser menor de 5 carácteres')
        .max(100, 'No debe exceder de 100 carácteres')
        .required('El password es obligatorio')
})